class Book {
    constructor(isbn, title, price, publisher, published) {
        this.isbn = isbn;
        this.title = title;
        this.price = price;
        this.publisher = publisher;
        this.published = published;
    }

    get isbn() {
        return this._isbn;
    }
    set isbn(value) {
        this._isbn = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new TypeError('数値でないか0以下');
        }
        this._price = value;
    }
    get publisher() {
        return this._publisher;
    }
    set publisher(value) {
        this._publisher = value;
    }
    get published() {
        return this._published;
    }
    set published(value) {
        if (!(typeof value === 'object' && value instanceof Date)) {
            throw new TypeError("日付型でない");
        }
        this._published = value;
    }
    toString() {
        return `ISBNコード: ${this.isbn} \nタイトル: ${this.title} \n価格: ${this.price} \n出版社: ${this.publisher} \n刊行日: ${this.published}`
    }
}

class Bookshelf {
    constructor() {
        this._books = [];
    }
    // 本を追加
    addBook(book) {
        this._books.push(book);
    }
    addBooks(...books) {
        for (let book of books) {
            this._books.push(book);
        }
    }
    // 本を取り出す
    removeBookByIsbn(isbn) {
        let pos = 0;
        for (let book of this._books) {
            if (book.isbn == isbn) {
                this._books.splice(pos, 1);
                return book;
            }
            pos++;
        }
        return null;
    }
    // 指定した文字列がタイトルに含まれる本のリストを返す
    searchBooksByTitle(title) {
        let result = [];
        for (let book of this._books) {
            if (book.title.indexOf(title) > -1) {
                result.push(book);
            }
        }
        return result;
    }
    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
            next() {
                return current < that._books.length ?
                    {value: that._books[current++], done: false} :
                    {done: true}
            }
        }
    }
}

let bookshelf = new Bookshelf();

console.log('---< 本の一括追加(addBooks) >---');
bookshelf.addBooks(...[
    new Book('978-4-1111-2222-3', 'はじめてのJavaScript', 1000, '日経BP社', new Date('2018-12-25')),
    new Book('978-4-6666-7777-8', '基礎Python', 2680, 'インプレス', new Date('2020-01-21')),
    new Book('978-4-3333-4444-5', 'JavaScritp入門', 2000, '翔泳社', new Date('2021-08-19')),
    new Book('978-4-5555-6666-7', 'ゲームを作りながら覚えるJavaScript入門', 30000, '楽園社', new Date('2021-09-07')),
    new Book('978-4-2222-3333-4', 'Java入門', 2500, 'ジャバ出版', new Date('2019-06-15')),
    new Book('978-4-4444-5555-6', '独習PHP', 3200, '翔泳社', new Date('2020-06-15'))
]);

for (let book of bookshelf) {
    console.log(book);
}

console.log('---< 本の追加(addBook) >---');
bookshelf.addBook(new Book('978-4-8888-9999-0', '独習C#', 3600, '翔泳社', new Date('2019-09-30')))

for (let book of bookshelf) {
    console.log(book);
}

console.log('---< 本の削除(removeBook) >---');
let removedBook = bookshelf.removeBookByIsbn('978-4-4444-5555-6');
if (removedBook != null) {
    console.log(`${removedBook.title}が本棚から取り出されました。`);
}

for (let book of bookshelf) {
    console.log(book);
}

let title = '入門';

console.log('---< タイトルによる本の検索(searchBookByTitle) >---');
let books = bookshelf.searchBooksByTitle(title);
console.log(books);
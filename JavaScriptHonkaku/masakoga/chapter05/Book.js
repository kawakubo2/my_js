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

let book1 = new Book('978-4-295-01063-0', '基礎Python改訂第2版', 2680, 'インプレス', new Date('2021-01-21'));
console.log(book1.toString());

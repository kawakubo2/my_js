class Bookshelf {
    id = 0;
    #books = new Map();
    constructor() {
        ;
    }
    /*
    貸出
    */
    rental(id) {
        if (!this.exists(id)) {
            throw new Error("該当する書籍は存在しません。");
        }
        const book = this.#books.get(id);
        book.rental = true;
    }
    /*
    返却
    */
    returns(id) {
        if (!this.exists(id)) {
            throw new Error("該当する書籍は存在しません。");
        }
        const book = this.#books.get(id);
        book.rental = false;
    }
    /*
    指定したidの書籍が存在するか判定。存在すればtrue、存在しなければfalseを返す
    */
    exists(id) {
        return this.#books.has(id);
    }
    /*
    タイトルで検索
    */
    search(title) {
        const result = [];
        for (const [id, book] of this.#books.entries()) {
            if (book.title.indexOf(title) > -1) {
                result.push(book);
            }
        }
        return result;
    }
    /*
    新規購入分の追加
    */
    add(book) {
        book.id = Bookshelf.id;
        this.#books.set(++(Bookshelf.id), book);
    }
    /*
    廃棄
    */
    remove(id) {
        this.#books.remove(id);
    }
}
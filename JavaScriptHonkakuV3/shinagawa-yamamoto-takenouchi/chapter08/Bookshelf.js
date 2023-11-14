class Bookshelf {
    #map= new Map();
    // 新しい本を本棚に追加
    add(book) {
        this.#map.set(id, book);
        book.exists = true;
    }
    returns(book) {
        this.#map.set(book.id, book);
        book.exists = true;
    }
    borrow(id) {
        if (!this.#map.has(id)) {
            throw new Error("本棚にありません。");
        }
        const book = this.#map.get(id);
        return this.#map
    }
    search(title) {
        const books = [];
        for (const [id, book] of this.#map.entries()) {
            if (book.title.includes(title) || title === null || title === '') {
                books.push(book);
            }
        }
        return books;
    }
}
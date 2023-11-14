class Book {
    #id = 0;
    #title = "";
    #publisher = "";
    #published = null;
    #price = 0;
    #exists = true;

    constructor(id, title, publisher, published, price, exists) {
        this.#id = id;
        this.#title = title;
        this.#publisher = publisher;
        this.#published = published;
        this.#price = price;
        this.#exists = exists;
    }
    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get publisher() {
        return this.#publisher;
    }
    get published() {
        return this.#published;
    }
    get price() {
        return this.#price;
    }
    get exists() {
        return this.#exists;
    }
    set exists(value) {
        this.#exists = value;
    }

}
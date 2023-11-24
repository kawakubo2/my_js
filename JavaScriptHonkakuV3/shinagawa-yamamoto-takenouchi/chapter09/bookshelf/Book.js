class Book {
    #id = 0;
    #title = '';
    #price = 0;
    #publisher = '';
    #published = null;
    #rental = false;
    constructor(title, price, publisher, published, rental) {
        this.#title = title;
        this.#price = price;
        this.#publisher = publisher;
        this.#published = published;
        this.#rental = rental;
    }
    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get price() {
        return this.#price;
    }
    get publisher() {
        return this.#publisher;
    }
    get published() {
        return this.#published;
    }
    get rental() {
        return this.#rental;
    }
    set rental(value) {
        if (typeof value !== 'boolean') {
            throw new TypeError('boolean型を指定してください。');
        }
        this.#rental = value;
    }
}
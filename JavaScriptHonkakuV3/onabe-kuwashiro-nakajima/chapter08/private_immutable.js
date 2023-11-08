class Member {
    #name = '';
    #birth = new Date();
    constructor(name, birth) {
        this.#name = name;
        this.#birth = new Date(birth.getTime());
        Object.freeze(this);
    }
    get name() {
        return this.#name;
    }
    get birth() {
        return this.#birth;
    }
    show () {
        console.log(`私の名前は${this.#name}、生年月日は${this.#birth.toDateString()}`);
    }
    withName(name) {
        return new Member(name, this.birth);
    }
}
Object.freeze(Member.prototype);
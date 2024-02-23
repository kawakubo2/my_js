class Member {
    #name = '';
    #birth = 0;
    constructor(name, birth) {
        this.#name = name;
        this.#birth = birth; // this.#birth = new Date(birth.getTime());
        Object.freeze(this);
    }
    get name() {
        return this.#name;
    }
    get birth() {
        return this.#birth; // return new Date(this.#birth.getTime());
    }
    show() {
        console.log(`私の名前は${this.name}、生年月日は${this.#birth.toLocaleDateString()}です。`);
    }
    withName(name) {
        return new Member(name, this.birth);
    }
}

// Object.freeze(Member.prototype);

const b = new Date(2000, 1, 23);
const m = new Member('山田太郎', b);
m.show();
b.setMonth(b.getMonth() - 1);
m.show();

const d = m.birth; // get name
d.setFullYear(d.getFullYear() - 1);
m.show();
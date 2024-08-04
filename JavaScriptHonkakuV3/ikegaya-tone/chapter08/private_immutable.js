class Member {
    #name = '';
    #birth = new Date();

    constructor(name, birth) {
        this.#name = name;
        this.#birth = new Date(birth.getTime());
        // this.#birth = birth;
        Object.freeze(this);
    }
    get name() {
        return this.#name;
    }
    get birth() {
        return new Date(this.#birth.getTime());
        // return this.#birth;
    }
    show() {
        console.log(`私の名前は${this.#name}、生年月日は${this.#birth.toDateString()}`);
    }
    withName(name) {
        return new Member(name, this.birth);
    }
}
Object.freeze(Member.prototype);

const name = '山田太郎';
const birth = new Date('2000-01-01');
const mem = new Member(name, birth);
console.log(`${mem.name}さんの生年月日は${mem.birth.toLocaleDateString()}です。`);
birth.setMonth(birth.getMonth() - 3);
const birth2 = mem.birth;
birth2.setFullYear(birth2.getFullYear() + 3);
console.log(`${mem.name}さんの生年月日は${mem.birth.toLocaleDateString()}です。`);


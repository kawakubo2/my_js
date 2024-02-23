class Member {
    #name = '';
    #birth = 0;
    constructor(name, birth) {
        this.#name = name;
        this.#birth = new Date(birth.getTime());
        Object.freeze(this);
    }
    get name() {
        return this.#name;
    }
    get birth() {
        return new Date(this.#birth.getTime());
    }
    show() {
        console.log(`私の名前は${this.name}、生年月日は${this.#birth.toDateString()}です。`);
    }
    withName(name) {
        return new Member(name, this.birth); // get nameで防衛的コピーを行っているので、ここでは不要
    }
}

Object.freeze(Member.prototype);

const d = new Date(2000, 1, 23);
const m = new Member('佐藤理央', d);
m.show();
try {
    m.age = -18;
} catch(e) { // 例外を補足
    console.log(e.message);
}

const m2 = m.withName('鈴木次郎');
const d1 = m2.birth;
d1.setDate(d1.getDate() - 3);
m.show();
m2.show();
console.log(Member.prototype);
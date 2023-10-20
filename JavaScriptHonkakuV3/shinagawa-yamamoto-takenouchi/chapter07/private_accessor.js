class Member {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age; // プロパティではなくsetterを使ってprivateなageに値を設定している
    }

    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    set name(value) {
        this.#name = value;
    }
    set age(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('ageは0以上の数値で入力してください。');
        }
        this.#age = value;
    }
    show () {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const m = new Member('佐藤理央', 25);
m.show();
try {
    m.age = 18;
} catch(e) {
    console.log(e.message);
}
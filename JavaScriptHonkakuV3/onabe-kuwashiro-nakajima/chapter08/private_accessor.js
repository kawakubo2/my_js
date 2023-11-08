class Member {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.#name = name;
        this.age = age; // セッター関数を使用して値を入れている
    }
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('ageは0以上の数値を指定してください。');
        }
        this.#age = value;
    }
    show() {
        console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
    }
}

const m = new Member('佐藤理央', 25); // コンストラクタインジェクション
m.show();
try {
    m.age = -18; // セッターインジェクション
} catch(e) {
    console.log(e.message);
}
try {
    const m2 = new Member('田中一郎', 'abc');
    m2.show();
} catch(e) {
    console.log(e.message);
}



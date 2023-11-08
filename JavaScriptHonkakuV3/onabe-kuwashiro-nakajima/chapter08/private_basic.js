class Member {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    #createMessage() {
        return `私の名前は${this.#name}、${this.#age}歳です。`;
    }
    show () {
        console.log(this.#createMessage());
    }
}

const m = new Member('佐藤理央', 25);
m.show();
// console.log(m.#name); privateなプロパティ、メソッドはインスタンス外部からは呼び出せない
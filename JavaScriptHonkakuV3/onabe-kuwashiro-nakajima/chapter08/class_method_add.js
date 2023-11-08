class Member  {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const m = new Member('佐藤理央', 25);
Member.prototype.greet = function() {
    console.log(`こんにちは、${this.name}さん！`);
};
m.greet();

const m2 = new Member('田中一郎', 55);
m2.greet();
class Member {
    constructor(name = '名無権兵衛', age = 0) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const member = new Member('佐藤理央', 25);
member.show();
const member2 = new Member('田中一郎', 55);
member2.show();
class Member {
    // 特殊メソッド
    constructor(name = '名無権兵衛', age = 0) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const mem1 = new Member('佐藤理央', 25);
mem1.show();
const mem2 = new Member('佐藤理央');0
mem2.show();
const mem3 = new Member();
mem3.show();

Math.PI;
class Member {
    constructor(name = '名無しの権兵衛', age = 0) {
        this.name = name;
        this.age = age;
    }
    show () {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

let m = new Member('佐藤理央', 25);
m.show();
let m2 = new Member();
m2.show();


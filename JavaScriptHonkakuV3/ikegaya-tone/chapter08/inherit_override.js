class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `こんにちは、${this.name}さん`;
    }
}

class BusinessMember extends Member {
    greet(title) {
        return `こんにちは、${this.name}${title}さん！`;
        // return `${title}${super.greet()}`;
    }
}

const bm = new BusinessMember('佐藤理央', 25);
console.log(bm.greet('課長'));
console.log(bm.greet());
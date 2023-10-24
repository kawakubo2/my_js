class Member {
    constructor(name = '名無しの権兵衛') {
        this.name = name;
    }
    greet() {
        return `こんにちは、${this.name}`;
    }
}

class BusinessMember extends Member {
    work() {
        return `${this.name}は働いています。`;
    }
    greet() {
        return `■${super.greet()}■`;
    }
}

const bm = new BusinessMember('佐藤理央');
console.log(bm.greet('課長'));
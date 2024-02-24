class Member {
    constructor(name = '名無しの権兵衛') {
        this.name = name;
    }
    greet() {
        return `こんにちは、${this.name}さん！`;
    }
}

class BusinessMember extends Member {
    greet(title) {
        return `■${super.greet()}■`;
    }
}

const bm = new BusinessMember('佐藤理央');
console.log(bm.greet());
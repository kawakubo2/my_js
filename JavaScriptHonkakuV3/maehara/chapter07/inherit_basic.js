class Member {
    constructor(name = '名無しの権兵衛') {
        this.name = name;
    }
    greet() {
        return `こんにちは、${this.name}さん！`;
    }
}

class BusinessMember extends Member {
    work() {
        return `${this.name}は働いています。`;
    }
}

const bm = new BusinessMember('佐藤理央');
console.log(bm.greet());
console.log(bm.work());
class Member {
    constructor(name = '名無しの権兵衛') {
        this.name = name;
    }
    greet() {
        return `こんにちは、${this.name}`;
    }
}

class BusinessMember extends Member {
    constructor(name = '名無しの権兵衛', title = '社員') {
        super(name);
        this.title = title;
    }
    work() {
        return `${this.name}は働いています。`;
    }
}

const bm = new BusinessMember('佐藤理央', '主任');
console.log(bm);
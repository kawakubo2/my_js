class Member {
    constructor(name = "名無しの権兵衛") {
        this.name = name;
    }
    greet() {
        return `こんにちは、${this.name}さん！`;
    }
}

class BusinessMember extends Member {
    work() {
        return `${this.name}は働いています`;
    }
}

export { Member, BusinessMember };
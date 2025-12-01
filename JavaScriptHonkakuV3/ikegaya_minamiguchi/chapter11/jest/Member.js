export default class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `私の名前は${this.name}、${this.age}歳です`;
    }
    toString() {
        return `Member class[name=${this.name} age=${this.age}]`;
    }
}
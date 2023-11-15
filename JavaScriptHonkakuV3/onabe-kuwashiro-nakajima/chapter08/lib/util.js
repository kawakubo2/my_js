const AUTHOR = "YAMADA, Yoshihiro";

export function getTriangleArea(base, height) {
    return base * height / 2;
}

export class Member {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    show() {
        console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
    }
}
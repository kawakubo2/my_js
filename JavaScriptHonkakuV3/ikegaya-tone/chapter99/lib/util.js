const AUTHOR = 'YAMADA, Yoshihiro';

export function getTriangleArea(base, height) {
    return base * height / 2;
}

export class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        return `こんにちは、${this.name}、${this.age}歳です。`;
    }
}

export function getAuthor() {
    return AUTHOR;
}
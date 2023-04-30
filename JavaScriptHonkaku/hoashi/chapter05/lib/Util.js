const AUTHOR = 'YAMADA, Yoshihiro';

export class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        return this.lastName + this.firstName;
    }
}
export class Area {
    static getTriangleArea(base, height) {
        return base * height / 2;
    }
    static getDiamondArea(diagonal1, diagonal2) {
        return diagonal1 * diagonal2 / 2;
    }
}

export default class Animal {
    walk() {
        console.log('トコトコ...');
    }
}
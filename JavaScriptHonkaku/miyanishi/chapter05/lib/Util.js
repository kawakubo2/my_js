const AUTHOR = 'YAMADA, Yoshihiro';

export class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        return this.lastName + ' ' + this.firstName;
    }
}

export class Area {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}
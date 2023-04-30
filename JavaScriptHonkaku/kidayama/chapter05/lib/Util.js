const AUTHOR = 'YAMADA, YOshihiro';

export class Member {
        constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    getName() {
        return this.lastName + this.firstName;
    }
}

class BusinessMember extends Member {
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }
}

export class Area {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getTriangleArea() {
        return this.base * this.height / 2;
    }
}
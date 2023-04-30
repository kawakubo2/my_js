export class Member {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getName() {
        return this.lastname + this.firstname;
    }
    toString() {
        return `name: ${this.lastname + this.firstname} age: ${this.age}`;
    }
}

export class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height;
    }
}
class Member {
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
        return this.lastName + this.firstName
    }

}

let m1 = new Member('太郎', '山田');
let m2 = new Member('花子', '横山');
console.log(m1.getName());
console.log(m2.getName());
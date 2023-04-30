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
        return this.lastName + this.firstName;
    }
}

const m1 = new Member('太郎', '山田');
console.log(m1.lastName); // get lastName
m1.firstName = '二郎';    // set firstName
console.log(m1.getName());
m1._firstName = '三郎';
console.log(m1.getName());
class Member {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    // set firstName(value) {
    //     this._firstName = value;
    // }
    get lastName() {
        return this._lastName;
    }
    // set lastName(value) {
    //     this._lastName = value;
    // }
    getName() {
        return this.lastName + this.firstName;
    }
}

const mem = new Member('太郎', '山田');
console.log(mem.getName());
// mem.lastName = '田中';
// mem.firstName = '次郎';
console.log(mem.getName());

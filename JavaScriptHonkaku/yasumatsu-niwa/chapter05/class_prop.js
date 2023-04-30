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

const m = new Member('太郎', '山田');
console.log(m.getName());
m._lastName = '鈴木';
console.log(m.getName());
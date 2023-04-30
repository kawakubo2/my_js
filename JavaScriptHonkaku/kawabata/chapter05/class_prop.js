class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
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

    getName() {
        return super.getName() + '/役職:' + this.clazz;
    }

    work() {
        return this.getName() + 'は働いています。';
    }
}

let m = new Member('太郎', '山田');
console.log(m.getName());
m.lastName = 'たなか';
console.log(m.getName());
console.log(m.firstName);

let bm = new BusinessMember('太郎', '山田', '課長');
console.log(bm.getName());
console.log(bm.work());
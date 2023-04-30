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
        return this.lastName + ' ' + this.firstName;
    }
}

class BusinessPerson extends Member {
    work() {
        return this.getName() + 'は働いています。';
    }
}

const bm = new BusinessPerson('太郎', '山田');
console.log(bm.getName());
console.log(bm.work());
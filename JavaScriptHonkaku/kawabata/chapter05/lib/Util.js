const AUTHOR = 'YAMADA. Yoshihiro';

export class Member {
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

export class BusinessMember extends Member {

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

export class Area {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}


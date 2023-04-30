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

class BusinessMember extends Member {
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName)
        this.clazz = clazz;
    }
    get clazz() {
        return this._clazz;
    }
    set clazz(value) {
            this._clazz = value;
        }
        // オーバーライド(override)・・・基底クラスの同名メソッドを無効化する
    getName() {
        return super.getName() + ' / 役職:' + this.clazz;
    }
}

let bm = new BusinessMember('太郎', '山田', '課長');
console.log(bm.getName());
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullname() {
        return this.lastname + this.firstname;
    }
    set age(value) {
        this._age = Number(value);
    }
    get age() {
        return this._age;
    }
    set gender(gender) {
        if (!['男', '女', 'トランスジェンダー'].includes(gender)) {
            throw new TypeError('genderプロパティには"男"、"女"、"トランスジェンダー"を設定してください。');
        }
        this._gender = gender;
    }
    get gender() {
        return this._gender;
    }
}

const taro = new Person('太郎', '独習');
const hanako = new Person('花子', '独習');
console.log(taro.fullname);
taro.age = "18";
taro._age = 22;
console.log(typeof taro.age);

try {
    taro.gender = "トランスジェンダー";
    console.log(taro);
    hanako.gender = "その他";
} catch (e) {
    console.log(e.message);
}
const SECRET_VALUE1 = Symbol();
const SECRET_VALUE2 = Symbol();

export default class YourApp {
    constructor(secret1, secret2) {
        this.hoge = 'hoge';
        this.foo = 'foo';
        this[SECRET_VALUE1] = secret1;
        this[SECRET_VALUE2] = secret2;
    }

    checkValue(secret1) {
        return this[SECRET_VALUE1] === secret1;
    }
}
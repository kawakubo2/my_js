class Member {
  #name = '';
  #age = 0;
  constructor(name, age) {
    this.#name =  name;
    if (!this.#isPositiveNumber(age)) {
      throw new TypeError('ageは0以上の数値で指定してください。');
    }
    this.#age = age;
    Object.freeze(this);
  }
  #isPositiveNumber(value) {
    return typeof value === 'number' && value > 0;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  show() {
    console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
  }
}

// Object.freeze(Member.prototype);

const m = new Member('佐藤理央', 25);
m.show();

Member.prototype.getData = function() {
  return {name: this.name, age: this.age};
}

console.log(m.getData());
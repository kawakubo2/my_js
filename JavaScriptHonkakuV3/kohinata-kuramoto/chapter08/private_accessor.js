class Member {
  #name = '';
  #age = 0;
  // コンストラクタ・インジェクション
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get age() {
    return this.#age;
  }
  // セッター・インジェクション
  set age(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new TypeError('ageは0以上の数値で指定してください。');
    }
    this.#age = value;
  }
  show() {
    console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
  }
}

const m = new Member('佐藤理央', 25);
m.show();
console.log(`名前: ${m.name}`);
console.log(`年齢: ${m.age}`);
m.age = 27;
m.show();

try {
  m.age = -18;
} catch(e) {
  console.log(e.message);
}
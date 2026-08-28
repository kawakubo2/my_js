class Rectangle {
  #width = 0;
  #height = 0;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get width() {
    return this.#width;
  }
  set width(value) {
    if (!this.#isValid(value)) {
      throw new TypeError('widthは0以上の数値で指定してください。');
    }
    this.#width = value;
  }
  get height() {
    return this.#height;
  }
  set height(value) {
    if (!this.#isValid(value)) {
      throw new TypeError('heightは0以上の数値で指定してください。');
    }
    this.#height = value;
  }

  #isValid(value) {
    return typeof value === 'number' && value > 0;
  }

  // メソッド
  getArea() {
    return this.#width * this.#height;
  }

  getDiagonal() {
    return Math.hypot(this.#width, this.#height);
  }

}

const rec1 = new Rectangle(8, 6);
console.log(`幅: ${rec1.width}`); // get width()が呼び出される
console.log(`高さ: ${rec1.height}`); // get height()が呼び出される
console.log(`面積: ${rec1.getArea()}`);
console.log(`対角線の長さ: ${rec1.getDiagonal()}`);

console.log('--- 幅と高さを変更 ---');
rec1.width = 4; // set width(4)が呼び出される
rec1.height = 3 ; // set height(3)が呼び出される
console.log(`幅: ${rec1.width}`); // get width()が呼び出される
console.log(`高さ: ${rec1.height}`); // get height()が呼び出される
console.log(`面積: ${rec1.getArea()}`);
console.log(`対角線の長さ: ${rec1.getDiagonal()}`);

try {
  const rec2 = new Rectangle(4, -5);
} catch(e) {
  console.log(e.message);
}
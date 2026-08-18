class Rhombus {
  static cache = new Map();

  constructor(diagonal1, diagonal2) {
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
    Object.freeze(this);
  }

  area() {
    return this.diagonal1 * this.diagonal2 / 2;
  }

  static size() {
    return this.cache.size;
  }

  static of(d1, d2) {
    const key = d1 + "," + d2;
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const r = new Rhombus(d1, d2);
    this.cache.set(key, r);
    return r;
  }
}

const r1 = Rhombus.of(5, 8);
const r2 = Rhombus.of(5, 8);
const r3 = Rhombus.of(8, 5);
const r4 = Rhombus.of(8, 5);

console.log(`インスタンスの数: ${Rhombus.size()}`)

console.log(r1 === r2);
console.log(r1 === r3);


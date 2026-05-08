const rec1 = {
  width: 8,
  height: 5,
  getArea: function() {
    return this.width * this.height;
  }
};

console.log(rec1.getArea());

// オブジェクトリテラル
const rec2 = {
  width: 10, // プロパティ
  height: 12,  // プロパティ
  getArea: function() { // メソッド
    return this.width * this.height;
  }
}

console.log(rec2.getArea());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getDiagonal() {
    return Math.hypot(this.width, this.height);
  }
}

const rec3 = new Rectangle(3, 4);
console.log(rec3.getArea());
console.log(rec3.getDiagonal());
const rec4 = new Rectangle(8, 6);
console.log(rec4.getArea());
console.log(rec4.getDiagonal());

const rec5 = null;
if (rec5 != null) {
  console.log(rec5.getArea());
}
console.log(rec5?.getArea());


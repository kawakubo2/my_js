const rectangle = {
  // プロパティ
  width: 6,
  height: 8,
  color: 'blue',
  x: 3,
  y: 4,
  // メソッド(プロパティに自由にアクセスできる)
  getArea() {
    return this.width * this.height;
  },
  getDiagonal() {
    // return Math.hypot(this.width, this.height);
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
};

console.log(`幅が${rectangle.width}、高さが${rectangle.height}`);
console.log(`面積: ${rectangle.getArea()}`);
console.log(`対角線: ${rectangle.getDiagonal()}`);
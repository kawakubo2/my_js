class Triangle {
  static type = 'figure'; // 静的プロパティ
  static area(base, height) {
    return base * height / 2;
  }
}

console.log(Triangle.area(8, 5)); // 静的メソッド
console.log(Triangle.type);
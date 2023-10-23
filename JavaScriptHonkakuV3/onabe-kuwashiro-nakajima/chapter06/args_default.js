function getTriangleArea(base = 10, height = 5) {
    return base * height / 2;
}

console.log(getTriangleArea()); // base, heightとも省略するパターン
console.log(getTriangleArea(4)); // heightだけ省略するパターン(baseだけ省略はできない)
console.log(getTriangleArea(1, 2)); // base, heightとも指定するパターン
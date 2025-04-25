// 関数リテラル、匿名関数、無名関数
let getTriangleArea = function(width, height) {
  return width * height / 2;
}

console.log(getTriangleArea(10, 4));

let xyz = getTriangleArea;
console.log(xyz(12, 8));
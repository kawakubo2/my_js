const getTriangleArea = function(base, height) {
  return base * height / 2;
}

console.log(getTriangleArea(10, 20));

const getTriangleArea2 = getTriangleArea;
console.log(getTriangleArea2(8, 6));
const getTriangleArea = function(base, height) {
    return base * height / 2;
};

console.log(getTriangleArea(10, 4));

const abc = getTriangleArea;
console.log(abc(8, 7));

console.log(abc(8, 7));
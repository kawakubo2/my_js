function getTriangleArea({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangleArea({base: 5, height: 4}));
console.log(getTriangleArea({height: 4, base: 5})); 
console.log(getTriangleArea({height: 4})); 

let aaa = {name: 'Yamada', age: 25, base: 20, height: 10};

console.log(getTriangleArea(aaa));
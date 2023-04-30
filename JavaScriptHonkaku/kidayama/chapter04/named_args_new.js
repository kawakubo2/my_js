function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle({base: 10, height: 8}));
console.log(getTriangle({height: 8, base: 10}));
console.log(getTriangle({base: 10}));
console.log(getTriangle({height: 8}));
console.log(getTriangle({}));
function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle({base: 5, height: 4}));
console.log(getTriangle({height: 4, base: 4}));
console.log(getTriangle({base: 8}));
console.log(getTriangle({height: 6}));
console.log(getTriangle({}));
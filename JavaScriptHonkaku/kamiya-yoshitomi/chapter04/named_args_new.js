function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle({base: 5, height: 3}));
console.log(getTriangle({height: 3, base: 5}));
console.log(getTriangle({base: 5}));
console.log(getTriangle({height: 3}));
console.log(getTriangle({}));
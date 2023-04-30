function getTriangle({ base = 1, height = 1 }) {
    return base * height / 2;
}
console.log(getTriangle({ base: 4, height: 5 }));
console.log(getTriangle({ height: 5, base: 4 }));
console.log(getTriangle({ base: 6 }));
console.log(getTriangle({ height: 8 }));
console.log(getTriangle({}));
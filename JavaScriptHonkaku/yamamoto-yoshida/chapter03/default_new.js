function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

let x = 10;
let y;
console.log(getTriangle(x, y));

let a = 10;
let b = null;
console.log(getTriangle(a, b));
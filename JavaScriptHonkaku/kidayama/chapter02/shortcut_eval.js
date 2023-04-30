let x = 10;
let y = 5;
let z = 2;

if (x > y || (y *= 2) > 3) {
    z *= 10;
}

console.log(`x = ${x}, y = ${y}, z = ${z}`);
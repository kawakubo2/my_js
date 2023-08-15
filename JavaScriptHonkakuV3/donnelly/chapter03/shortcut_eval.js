let x = 10;
let y = 5;
let z = 3;

if (x >= 5 || (y *= 2) > 15) { // y *= 2 ---> y = y * 2
    z += 10; // z = z + 10
}

console.log(`x = ${x}, y = ${y}, z = ${z}`);
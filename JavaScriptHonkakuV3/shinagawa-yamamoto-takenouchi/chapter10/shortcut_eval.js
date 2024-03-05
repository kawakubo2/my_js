let x = 10;
let y = 5;
let z = 3;
if (x > 8 || (y *= 2)) {
    z *= 10;
}
console.log(`x=${x} y=${y} z=${z}`);

let w = 0;
w || console.log('失敗');

console.log([1, 2, 3] == true);
console.log([] == false);

let nums = [];
nums && nums.forEach(n => console.log(n));
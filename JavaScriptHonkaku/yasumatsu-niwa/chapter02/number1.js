let x = 0.2;
let y = 0.6;

console.log(x * 10 * 3 === y * 10);
console.log(Math.abs(x * 3 - y) < Number.EPSILON);

console.log(10 / 0);
console.log(-10 / 0);

const n = 3417;
console.log(n.toString(2));
console.log(n.toString(8));
console.log(n.toString(16));

const color = "rgba(255, 167, 123)";

function rgb2hex(rgb) {
    let temp = color.slice(5);
    temp = temp.slice(0, temp.indexOf(')'));
    let array = temp.split(',');
    return "#"
        +  Number.parseInt(array[0].trim()).toString(16)
        +  Number.parseInt(array[1].trim()).toString(16)
        +  Number.parseInt(array[2].trim()).toString(16);
}

function rgb2hexv2(rgb) {
    let result = color.slice(0, color.indexOf(')')).slice(5)
        .split(',').map(n => Number.parseInt(n.trim()).toString(16));
    return "#" + result.join("");
}

console.log(rgb2hex(color));
console.log(rgb2hexv2(color));

let set1 = new Set();
for (let i = 0; i < 10000; i++) {
    let n = Math.floor(Math.random() * 11) + 10;
    if (n < 10 || n > 20) console.log('異常');
    set1.add(n);
}
for (const r of set1) {
    console.log(r);
}
console.log(`要素数: ${set1.size}`);

console.log(Math.sqrt(5));
console.log(5 ** (1/2));

console.log(Math.cbrt(8));
console.log(8 ** (1/3));
console.log(1024 ** (1/10));

let a = 6;
let b = 8;
console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
console.log(Math.hypot(a, b));

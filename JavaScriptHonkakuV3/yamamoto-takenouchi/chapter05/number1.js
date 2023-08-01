let n = 123;
console.log(`n = ${n}`);
console.log(`n = 0b${n.toString(2)}`);
console.log(`n = 0o${n.toString(8)}`);
console.log(`n = 0x${n.toString(16)}`);

let m = 1_234_567_890;
console.log(m.toPrecision(4)); // 1.235e+9

let s1 = "123.45";
let f = Number.parseFloat(s1);
console.log(f + 100);

let s2 = "12345";
console.log(typeof s2);
let d1 = Number.parseInt(s2);
console.log(Number.isInteger(d1));

console.log((10 / 3).toFixed(2));
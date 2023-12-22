let a = null;
console.log(a ?? '特になし');

a = '負の数値です。';
console.log(a ?? '特になし');

let l = null;
let m = 10;
let n = null;
console.log(l * m * n);
console.log(l ?? 0 + m ?? 0 + n ?? 0);
console.log(`l=${l}, m=${m}, n=${n}`);
let a = 1;
let b = 2;
let c = 3;

let d = a = b = c;

console.log(`a=${d}`);
console.log(`a=${a}`);
console.log(`a=${b}`);
console.log(`a=${c}`);

const e = true;

console.log(!a);
console.log(!!a);
console.log(!!!a);
console.log(!!!!a);

let n1 = 0;
let b1 = !!n1;
console.log(b1);
console.log(Boolean(n1));

let n2 = 5;
console.log(!!n2);
console.log(Boolean(n2));

let s1 = '';
console.log(!!s1);
console.log(Boolean(s1));
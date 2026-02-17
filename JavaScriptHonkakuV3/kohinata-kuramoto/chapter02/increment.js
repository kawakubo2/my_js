let x = 10;
console.log(++x);

let y = 10;
console.log(y++);
console.log(y);

let a = 10;
let b = a++ * 2;
console.log(`a=${a} b=${b}`);

let c = 10;
let d = c * 2;
c++;
console.log(`c=${c} d={d}`);

let e = 10;
let f = e++ + e++;
console.log(f);
let x = 2;
let y = 3;
let z = '4';

console.log(x + y + z);
console.log((x + y) * z);

console.log(z * 10);

let w = z - 0;
console.log(typeof z);
console.log(typeof w);

z = Number(z);
console.log(typeof z);

let a = 0.2;
let b = 0.6;

const EPSILON = 1.0e-10;
if (Math.abs(a * 3 - b) < EPSILON) {
  console.log('等しい');
} else {
  console.log('等しくない');
}

if (a * 3 === b) {
  console.log('等しい');
} else {
  console.log('等しくない');
}

console.log(Number.EPSILON);
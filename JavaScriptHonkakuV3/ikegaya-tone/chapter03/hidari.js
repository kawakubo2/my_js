let x = 0.2;
let y = 0.6;

console.log(x * 10 * 3 === y * 10 ? '等しい': '等しくない');

let w = 1;
console.log(typeof w);
w = !!w; // number型からboolean型への型変換
console.log(typeof w);

let z = 0;
console.log(typeof z);
z = Boolean.apply(z);
console.log(typeof z);

let c = '100';
console.log(typeof c);
c = c - 0;
console.log(typeof c);
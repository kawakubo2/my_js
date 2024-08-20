// equality.js
const x = 10;
const y = '10';

console.log(`x == y: ${x == y}`);
console.log(`x === y: ${x === y}`);

const n = 0;
if (n == false) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
if (n === false) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
let m = 1;
if (m == true) {
    console.log('等しい');
} else {
    console.log('等しい');
}
/*
falsyな値
0, 0.0, '', null, undefined
*/

let message = null;
if (!message) {
    message = '特になし';
}
console.log(message);

message = message ? message : '特になし';
console.log(message);
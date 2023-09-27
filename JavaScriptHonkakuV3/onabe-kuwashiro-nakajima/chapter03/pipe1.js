let value0 = null;
value0 ||= '規定値';
console.log(`value0 = ${value0}`);

let value1 = '';
value1 ||= '規定値';
console.log(`value1 = ${value1}`);

let value2 = 'ABC';
value2 ||= '規定値';
console.log(`value2 = ${value2}`);

let value3 = '';
let value4 = null;
let value5; // undefined

value3 ??= 'XYZ';
value4 ??= 'VVV';
value5 ??= 'WWW';

console.log(`value3 = ${value3}`);
console.log(`value4 = ${value4}`);
console.log(`value5 = ${value5}`);


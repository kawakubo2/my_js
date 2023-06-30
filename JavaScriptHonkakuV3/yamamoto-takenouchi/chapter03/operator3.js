let value1 = '';
// value1 ||= '規定値1';
value1 = value1 || '規定値1';

let value2 = 'JavaScript';
// value2 ||= '規定値2';
value2 = value2 || '規定値2';

console.log(`value1 = ${value1}`);
console.log(`value2 = ${value2}`);

let value3 = 123;
console.log(value3 && 'abc');
const a1 = ['A', 'B', 'C', 'D', 'E', 'F'];
a1.push('G', 'H', 'I');
console.log(a1);
a1.unshift('Y', 'Z');
console.log(a1);
const a2 = ['1', '2', '3'];
a1.push(...a2);
console.log(a1);
const a3 = ['4', '5', '6'];
a1.unshift(...a3);
console.log(a1);

const e1 = a1.pop();
console.log(e1);
const e2 = a1.pop();
console.log(e2);
const e3 = a1.pop();
console.log(e3);

const e4 = a1.shift();
console.log(e4);
const e5 = a1.shift();
console.log(e5);
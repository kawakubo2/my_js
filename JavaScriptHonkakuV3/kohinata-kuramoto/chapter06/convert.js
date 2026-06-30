const s1 = "123";
const n1 = Number(s1);
console.log(`typeof n1 === ${typeof n1}`);

const n2 = 456;
const s2  = String(n2);
console.log(`typeof s2 === ${typeof s2}`);

const n3 = 5;
const n4 = 0;

const s3 = "";
const s4 = "abc";

console.log(`n3 = ${Boolean(n3)}`);
console.log(`n4 = ${Boolean(n4)}`);

console.log(`s4 = ${Boolean(s4)} `);
console.log(`s3 = ${Boolean(s3)} `);

const a1 = [];
console.log(`a1 = ${Boolean(a1)}`);
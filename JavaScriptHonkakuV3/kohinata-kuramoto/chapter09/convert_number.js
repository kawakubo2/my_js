const a = '123円';
const b = 'xyz';

const n1 = Number.parseInt(a);
console.log(`n1=${n1}`);
const n2 = Number.parseInt(b);
console.log(`n2=${n2}`);
const n3 = Number(b);
console.log(`n3=${n3}`);

const c = '123.45abc';
const n4 = Number.parseInt(c);
console.log(`n4=${n4}`);
const n5 = Number.parseFloat(c);
console.log(`n5=${n5}`);
const n6 = Number(c);
console.log(`n6=${n6}`);

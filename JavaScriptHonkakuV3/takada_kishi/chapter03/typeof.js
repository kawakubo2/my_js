let a = 13.57;
console.log(typeof a);
if (typeof a === 'number') {
  console.log(a * 10);
}
a = 'abc';
console.log(typeof a);
if (typeof a === 'string') {
  console.log(a.toUpperCase());
}
a = true;
console.log(typeof a);
const str = [123, +12, -100, 12.3, 'abc'];
for (const s of str) {
  console.log(Number.isInteger(s));
}
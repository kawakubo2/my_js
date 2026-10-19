const a = [1, 2, 3, 4, 5];
a[10] = 11;
console.log(a);

for (const key in a) {
  console.log(`${key}: ${a[key]}`);
}
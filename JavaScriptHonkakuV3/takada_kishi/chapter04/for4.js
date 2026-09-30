let g = 3000;
const rate = 1.04;
const y = 13.3;

for (let year = 1; year <= 35; year++) {
  // g *= rate
  g = g * rate - y * 12;
}

console.log(`35年後は${g}万です。`);
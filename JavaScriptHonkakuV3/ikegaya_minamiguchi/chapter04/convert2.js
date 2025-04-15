let n = 65535;
let m = n;

const a = [];
while (n >= 1) {
  a.push(n % 2);
  n = Math.floor(n / 2);
}

let r = '';
for (let i = a.length - 1; i >= 0; i--) {
  r += a[i];
}
console.log(`10進数の${m}を2進数で表現: ${r}`);
console.log(`10進数の${m}を2進数で表現: ${m.toString(2)}`);
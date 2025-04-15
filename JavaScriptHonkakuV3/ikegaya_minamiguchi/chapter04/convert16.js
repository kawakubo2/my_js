let n = 100000;
let m = n;

let s = '0123456789abcdef';

const a = [];
while (n >= 1) {
  a.push(s[n % 16]);
  n = Math.floor(n / 16);
}

let r = '';
for (let i = a.length - 1; i >= 0; i--) {
  r += a[i];
}
console.log(`10進数の${m}を8進数で表現: ${r}`);
console.log(`10進数の${m}を8進数で表現: ${m.toString(16)}`);
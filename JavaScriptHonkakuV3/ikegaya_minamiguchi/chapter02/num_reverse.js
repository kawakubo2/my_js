let n = 7246; // 6427

let r = 0;
while (n >= 1) {
  r = r * 10 + n % 10;
  n = Math.floor(n / 10);
}

console.log(r);
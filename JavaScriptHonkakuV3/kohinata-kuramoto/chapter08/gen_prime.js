function* genPrimes(max) {
  if (!(Number.isInteger(max) && max > 2)) {
    throw new Error("最大値には2より大きい整数値を指定してください。");
  }
  let num = 2;
  while(num <= max) {
    if (isPrime(num)) {
      yield num;
    }
    num++;
  }
}

function isPrime(value) {
  let prime = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

for (const n of genPrimes(100)) {
  console.log(n);
}
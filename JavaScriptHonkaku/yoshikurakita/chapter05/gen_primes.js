function* genPrimes() {
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(value) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

let start = Date.now();
for (let value of genPrimes()) {
    if (value > 10000000) break;
    // console.log(value)
}
let end = Date.now();
console.log(`処理時間: ${end - start}`);
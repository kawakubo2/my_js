function* genPrimes(max = 100) {
    let num = 2;
    while (true) {
        if (num > max) break;
        if (isPrime(num)) { yield num; }
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

for (const value of genPrimes(1000)) {
    console.log(value);
}
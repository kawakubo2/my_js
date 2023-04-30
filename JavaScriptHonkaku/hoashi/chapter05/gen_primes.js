function* genPrimes(value = 100) {
    let num = 2;
    while (true) {
        if (num > value) break;
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

for (const value of genPrimes(200)) {
    console.log(value);
}
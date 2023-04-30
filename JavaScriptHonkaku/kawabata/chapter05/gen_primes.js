function* genPrimes(max) {
    let num = 2;
    while(num <= max) {
        if (isPrime(num)) yield num;
        num++;
    }
}

function isPrime(value) {
    let prime = true;
    for (let i = 2; i < Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

for (let value of genPrimes(100)) {
    console.log(value);
}
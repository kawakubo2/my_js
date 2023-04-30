const fibonacci = n => {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1); 
}

const start = Date.now();
for (const n of [43, 44, 45]) {
    console.log(fibonacci(n));
}
const end = Date.now();
console.log(`処理時間: ${end - start}`);

const asyncFibonacci = n => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fibonacci(n));
        })
    })
};

const start_async = Date.now();
Promise.all([
    asyncFibonacci(43),
    asyncFibonacci(44),
    asyncFibonacci(45),
])
.then(
    response => {
        console.log(response);
        const end_async = Date.now();
        console.log(`非同期処理時の処理時間: ${end_async - start_async}`);
    }
);

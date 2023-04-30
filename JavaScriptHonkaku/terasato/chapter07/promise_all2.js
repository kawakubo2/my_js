const fibonacci = n => {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
};

const asyncProcess = (start, end) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let result = {};
            for (let i = start; i < end; i++) {
                result[i] = fibonacci(i);
            }
            resolve(result);
        });
    })
};


const start_promise = Date.now();
Promise.all([
    asyncProcess(0, 41),
    asyncProcess(41, 42),
    asyncProcess(42, 43),
    asyncProcess(43, 44)
])
.then(
    response => {
        console.log(response);
        const end_promise = Date.now();
        console.log(`Promise使用時の処理時間: ${end_promise - start_promise}`);
    }
);

/*
const result = {};
const start = Date.now();
for (let i = 0; i < 44; i++) {
    result[i] = fibonacci(i);
}
console.log(result);
const end = Date.now();
console.log(`Promiseを使用しない時の処理時間: ${end - start}`);
*/
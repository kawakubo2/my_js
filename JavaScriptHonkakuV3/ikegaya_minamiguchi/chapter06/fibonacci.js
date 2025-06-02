function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const expects = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 
    89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];

for (let n = 0; n <= 20; n++) {
    const f = fibonacci(n);
    console.log(`期待値: ${expects[n]} 検出値: ${f}
        ${expects[n] === f ? '〇': '×'}`);
}
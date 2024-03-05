function fibonnaci(n) {
    if (n === 0 || n === 1) return n;
    return fibonnaci(n - 2) + fibonnaci(n - 1)
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

function asyncFibonacci(n) {
    return new Promise((resolve, reject) => {
        const answer = fibonnaci(n);
        resolve(answer);
    });
}

const num = 42; 
function callFibonacci(num) {
    asyncFibonacci(num)
        .then(answer => console.log(`フィボナッチ数${num}: ${answer}`));
}
callFibonacci(num);
console.log('フィボナッチを求める処理とは無関係な処理');
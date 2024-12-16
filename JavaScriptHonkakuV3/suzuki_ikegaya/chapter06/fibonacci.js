// function fibonacci(n) {
//     if (n === 0 || n === 1) return n;
//     return fibonacci(n - 2) + fibonacci(n - 1);
// }

// console.log(fibonacci(10));
// const start = new Date();
// console.log(fibonacci(45));
// console.log(`処理時間: ${new Date() - start}`);

console.log('--- 同じ引数を持った関数呼び出しの結果をmapで保存 ---');
const cache = new Map();
let start2 = new Date();
function fibonacci2(n) {
    if (n === 0 || n === 1) return n;
    let n2 = cache.get(n - 2);
    if (!n2) {
        n2 = fibonacci2(n - 2);
        cache.set(n - 2, n2)
    }
    let n1 = cache.get(n - 1);
    if (!n1) {
        n1 = fibonacci2(n - 1);
        cache.set(n - 1, n1)
    }
    return n2 + n1;
}
console.log(fibonacci2(55));
console.log(`処理時間: ${new Date() - start2}`);
function func(n, d) {
    return new Promise((f) => {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
        setTimeout(
            () => {
                f(total);
            }, d);
    });
}

func(100, 1000).then((value) => console.log(`合計: ${value}`))
func(1000, 500).then((value) => console.log(`合計: ${value}`))
func(10000, 100).then((value) => console.log(`合計: ${value}`))

console.log('同期処理1');
console.log('同期処理2');
console.log('同期処理3');
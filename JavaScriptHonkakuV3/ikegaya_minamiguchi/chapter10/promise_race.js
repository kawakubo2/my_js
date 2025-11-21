async function search(array, value) {
    return new Promise((resolve, reject) => {
        for (const n of array) {
            if (n === value) {
                resolve(`検索した値: ${n}`);
            }
        }
        resolve('1は見つかりませんでした');
    });
}

const numbers = [];
for (let i = 1; i < 1_000_000; i++) {
    numbers.push(0);
}

numbers[680_000] = 1;

console.time('promise_race');
Promise.all([
    search(numbers.slice(0, 333_333), 1),
    search(numbers.slice(333_333, 666_666), 1),
    search(numbers.slice(666_666, 1_000_000), 1)
])
.then(value => console.log(value));
console.timeEnd('promise_race');

console.time('for');
for (let i = 1; i < 1_000_000; i++) {
    if (numbers[i] === 1) {
        break;
    }
}
console.timeEnd('for');
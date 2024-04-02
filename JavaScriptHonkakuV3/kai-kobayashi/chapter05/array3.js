const numbers = [3, 4, 5, 7, 8, 6, 1, 9, 10, 2];

const numbers2 = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        numbers2.push(num);
    }
}
console.log(numbers2);

// const numbers3 = numbers.filter(n => n % 2 === 0);
const numbers3 = numbers.filter(function (n) { return n % 2 === 0; });
console.log(numbers3);

const numbers4 = numbers.map(function (n) { return n * n; });
console.log(numbers4);

// 偶数だけを2乗した値の配列が欲しい
const numbers5 = numbers.filter(function (n) { return n % 2 === 0; })
                        .map(function (n) { return n * n; });

console.log(numbers5);

const numbers6 = numbers.filter(n => n % 2 === 0).map(n => n * n);
console.log(numbers6);


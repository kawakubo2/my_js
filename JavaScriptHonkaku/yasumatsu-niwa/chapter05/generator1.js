// generator1.js

const numbers = [1, 2, 3, 4, -1, 5, 6, 7, -3, 8, 9, 10];

function* positive_number(nums) {
    for (const n of nums) {
        if (n >= 0) {
            yield n;
        }
    }
}

function* sqr(gen) {
    for (const n of gen) {
        yield n * n;
    }
}

// 正の整数値の二乗を表示
for (const n of sqr(positive_number(numbers))) {
    console.log(n);
}

const positive_square = numbers.filter(n => n >= 0).map(n => n * n);
for (const n of positive_square) {
    console.log(n);
}

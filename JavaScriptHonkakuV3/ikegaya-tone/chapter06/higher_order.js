const numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(`合計=${sum(numbers)}`);

// 偶数だけの合計
function even_sum(numbers) {
    let total = 0;
    for(const num of numbers) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

console.log(`偶数の合計=${even_sum(numbers)}`);

// 正の奇数の合計
function positive_odd_sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        if (num > 0 && num % 2 !== 0) {
            total += num;
        }
    }
    return total;
}

console.log(`正の奇数の合計=${positive_odd_sum(numbers)}`);

// filterのような関数をコールバック関数と呼ぶ
// filterは整数を受け取り、boolean型の戻り値を返す関数
function higher_sum(filter, numbers) {
    let total = 0;
    for (const num of numbers) {
        if (filter(num)) {
            total += num;
        }
    }
    return total;
}

function even(n) {
    return n % 2 === 0;
}

console.log(`偶数の合計=${higher_sum(even, numbers)}`);

function positive_odd(n) {
    return n > 0 && n % 2 !== 0;
}

console.log(`正の奇数の合計=${higher_sum(positive_odd, numbers)}`);

console.log(`偶数の合計=${higher_sum((n) => n % 2 === 0, numbers)}`);
console.log(`正の奇数の合計=${higher_sum(n => n > 0 && n % 2 !== 0, numbers)}`);
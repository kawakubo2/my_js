const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
/*
整数を格納した配列を受け取り、
正の奇数だけを格納した配列を
返す関数
[1, 3, 5, 7]
*/
function odd_numbers(numbers) {
    const result = [];
    for (const num of numbers) {
        if (num % 2 === 1) {
            result.push(num);
        }
    }
    return result;
}

console.log(odd_numbers(numbers));

/*
配列の数値要素を2倍した要素を持つ新しい配列を返す
*/
function double_numbers(numbers) {
    const result = [];
    for (const num of numbers) {
        result.push(num * 2);
    }
    return result;
}

console.log(double_numbers(numbers));

/*
numbersの数値要素を3倍する
*/
function triple_numbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 3;
    }
}

triple_numbers(numbers);
console.log(numbers);
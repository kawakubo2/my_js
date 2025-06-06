/*
整数(0～100)の配列を受け取り
重複した値を除き、昇順に並べ替えた
配列を返す関数

[8, 3, 1, 5, 3, 2, 8] ---> [1, 2, 3, 5, 8]
*/
function compress(numbers) {
    numbers.sort((x, y) => x - y);
    const result = [];
    let prev = numbers[0];
    result.push(numbers[0]);
    for (const n of numbers) {
        if (prev === n) continue;
        result.push(n);
        prev = n;
    }
    return result;
}

const numbers = [8, 3, 1, 5, 3, 2, 8];
console.log(compress(numbers));
const nums = [9, 6, 2, 1, 10, 8, 7, 5, 4, 3];
/*
整数値の配列を引数として取り、合計値を返す関数
*/
function sum(numbers) {
    let result = 0;
    for (const n of numbers) {
        result += n;
    }
    return result;
}
console.log(`合計: ${sum(nums)}`);

/*
整数値の配列を引数として取り、最大値を返す関数
配列には少なくとも1つの要素が含まれているものとする
*/
function max(numbers) {
    let m = numbers[0];
    for (const n of numbers) {
        if (n > m) m = n;
    }
    return m;
}
console.log(`最大値: ${max(nums)}`);

/*
整数値の配列を引数として取り、最大値を返す関数
配列には少なくとも1つの要素が含まれているものとする
*/
function min(numbers) {
    let m = numbers[0];
    for (const n of numbers) {
        if (n < m) m = n;
    }
    return m;
}
console.log(`最小値: ${min(nums)}`);

/*
整数値の配列を引数として取り、平均値を返す関数
配列には少なくとも1つの要素が含まれているものとする
*/
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
console.log(`平均値: ${avg(nums)}`);
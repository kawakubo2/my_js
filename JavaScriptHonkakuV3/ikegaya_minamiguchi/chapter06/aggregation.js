/*
数値型の配列を受け取り、
[合計, 平均, 最大値, 最小値, 件数]のように
結果を配列で返す関数

[5, 8, 4, 7, 1, 10, 9, 3, 2, 6] ---> [55, 5.5, 10, 1, 10]

集約関数、グループ関数
*/
function aggregate(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const num of numbers) {
        total += num;
        cnt++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [total, total / cnt, max, min, cnt];
}

const nums = [5, 8, 4, 7, 1, 10, 9, 3, 2, 6];

const [sum, avg, max, min, count] = aggregate(nums);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);
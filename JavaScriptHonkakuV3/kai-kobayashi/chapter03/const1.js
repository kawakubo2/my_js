/*
参照型の場合、要素の追加、削除、変更は自由にできるが
アドレスを変える行為は禁止
*/
const numbers = [1, 2, 3, 4, 5]; // (1)
numbers.push(6); // 末尾に追加
numbers.shift(0); // 先頭から削除
console.log(numbers);
// numbers = [10, 20, 30]; // (1)とは別のアドレスを持っているため代入不可


Object.freeze(numbers);
// numbers.shift(7);

function group_func(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (const num of numbers) {
        total += num; // total = total + num
        cnt++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [total, total / cnt, max, min, cnt];
}

const nums = [2, 8, 7, 3, 1, 9, 6, 10, 4, 5];

const result = group_func(nums);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

// 分割代入
const [sum, avg, max, min, count] = group_func(nums); // [55, 5.5, 10, 1, 10]
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);
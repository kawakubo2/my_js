const numbers = [7, 8, 2, 3, 9, 4, 1, 6, 10, 5];

/*
受け取った配列の、合計、平均、最大、最小、件数を求める
*/
function groupFunc(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        total += num;
        cnt++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [total, total / cnt , max, min, cnt];
}

const result = groupFunc(numbers);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`件数: ${result[4]}`);

// 配列の分割代入
const [sum, avg, max, min, count] = groupFunc(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);
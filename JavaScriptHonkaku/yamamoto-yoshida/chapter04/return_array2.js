/**
 * 数値型の配列から、その合計、平均、最大、最小、
 * 件数を求め配列として返す関数
 * @param nums 数値型の配列
 * @returns [合計,平均,最大,最小,件数]
 */
function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (const n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

const numbers = [5, 9, 2, 4, 6, 1, 10, 7, 8, 3];

const result = group_func(numbers);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

let [sum, avg, max, min, count] = group_func(numbers);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);
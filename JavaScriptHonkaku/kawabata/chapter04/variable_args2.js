function sprintf(format) {
    for (let i = 1, len = arguments.length; i < len; i++) {
        let pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    return format;
}

let message = sprintf('こんにちは、{1}さん、私は{0}です。・・・{1}さんですよね？', '山田', '掛谷');
console.log(message)

let member = {name: '山田太郎', age: 38, weight: 85, height:180 };

const bmi = ({weight, height}) => weight / Math.pow(height / 100, 2);

console.log(bmi(member));

function group_func(...nums) {
    if (nums.length === 0) {
        throw new Error('配列が空');
    }
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}


let [sum,  ,max,  ,count] = group_func(8, 1, 9, 5, 7, 4, 6, 3, 10, 2);
console.log(`合計:${sum}`);
// console.log(`平均:${avg}`);
console.log(`最大:${max}`);
//console.log(`最小:${min}`);
console.log(`件数:${count}`);

let nums2 = [1, [2, 3, [4, 5], [6, [7, 8], 9], 10]];

const heigher_sum = numbers => {
    let total = 0;
    for (let n of numbers) {
        if (Array.isArray(n)) {
            total += heigher_sum(n);
        } else if (typeof n === 'number') {
            total += n;
        } else {
            throw new Error('要素が数値でない');
        }
    }
    return total;
}

console.log(heigher_sum(nums2));
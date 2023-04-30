let str = '山田太郎';


for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i) + 'のコードポイントは' + str.charCodeAt(i));
}

let str2 = 'abcdefghi';
console.log(str2.slice(0, 3));
console.log(str2.slice(3));

let c1 = 23665;
let c2 = 30000;
console.log(String.fromCodePoint(c1) + String.fromCodePoint(c2));

let str3 = '            abc                 ';
console.log('>' + str3.trim() + '<');

let nums = [ -3, -11, -7, -11, -5 ];

function group_func(numbers) {
    let total = 0;
    let count = 0;
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    for (let n of numbers) {
        if (n > 0 && n % 2 == 0) {
            total += n;
            count++;
            if (n > max) max = n;
            if (n < min) min = n;
        }
    }
    if (max === Number.NEGATIVE_INFINITY) throw new Error('該当する要素が無い');
    return [total, total / count, max, min, count];
}

try {
    let [sum, avg, max, min, count] = group_func(nums);
    console.log('合計:' + sum);
    console.log('平均:' + avg);
    console.log('最大:' + max);
    console.log('最小:' + min);
    console.log('件数:' + count);
} catch (e) {
    console.log('エラーメッセージ:' + e);
}
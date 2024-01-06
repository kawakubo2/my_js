const numbers = [
    '1,2,3,4,5',
    '6,7,8,9,10',
    '11,12,13,14,15'
];

for (const nums of numbers) {
    const num_array = nums.split(',');
    console.log(num_array);
    let total = 0;
    for (const n of num_array) {
        total += (n - 0); // 文字列から数値への変換(正式には Number.parseIntを使用する)
    }
    console.log(`合計: ${total}`);
}
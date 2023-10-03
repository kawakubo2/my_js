function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}

const result = getMaxMin(10, 35, -5, 78, 0);
console.log(`最大値: ${result[0]}`);
console.log(`最小値: ${result[1]}`);

const [max, min] = getMaxMin(10, 35, -5, 78, 0); // 配列の分割代入
console.log(`最大値: ${max}`);
console.log(`最小値: ${min}`);

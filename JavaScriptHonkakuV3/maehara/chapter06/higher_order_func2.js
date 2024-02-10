const nums = [1, 2, 3, 4, 5];

function double_num(numbers) {
    let result = [];
    for (const num of numbers) {
        result.push(num * 2);
    }
    return result;
}

console.log(`数値を2倍した配列: ${double_num(nums)}`);

function square_sum(numbers) {
    let result = [];
    for (const num of numbers) {
        result.push(num ** 2);
    }
    return result;
}

console.log(`数値を2乗した配列: ${square_sum(nums)}`);

function circle_area(numbers) {
    let result = [];
    for (const num of numbers) {
        result.push(num ** 2 * Math.PI);
    }
    return result;
}

console.log(`数値を半径とした円の面積の配列: ${circle_area(nums)}`);

function higher_order_func(map, numbers) {
    let result = [];
    for (const num of numbers) {
        result.push(map(num));
    }
    return result;
}

// ReLU関数
function relu(num) {
    return Math.max(0, num);
}
console.log(`数値を2倍した配列: ${higher_order_func((n) => n * 2, nums)}`);
console.log(`数値を2乗した配列: ${higher_order_func((n) => n ** 2, nums)}`);
console.log(`数値を半径とした円の面積の配列: ${higher_order_func((n) => n ** 2 * Math.PI, nums)}`);

nums.push(-5);
nums.splice(1, 0, -3);
console.log(nums);
console.log(`正則化関数(ReLU)を適用した配列: ${higher_order_func(relu, nums)}`);
const numbers = [5, 4, 1, 8, 9, 2, 'a', 7, 10, 3, 6];

// 非破壊的メソッド
function even_filter(nums) {
    let result = [];
    for (const n of nums) {
        if (n % 2 === 0) {
            result.push(n);
        }
    }
    return result;
}

// 破壊的メソッド
function even_filter_in_place(nums) {
    nums.push(null);
    let i = 0;
    while (nums[i] !== null) {
        if (typeof nums[i] !== 'number') throw new Error(`数値以外の値: ${nums[i]}`)
        if (nums[i] % 2 !== 0) nums.splice(i--, 1);
        i++;
    }
    nums.pop();
}

try {
    even_filter_in_place(numbers);
    console.log(numbers);
} catch (e) {
    console.log(e.message);
}


const numbers = [1, 2, [3, 4, 5, [6, 7], [8, 9]], 10];

function arraySum(nums) {
    let total = 0;
    for (const num of nums) {
        if (Array.isArray(num)) {
            total += arraySum(num);
        } else {
            total += num;
        }
    }
    return total;
}

console.log(arraySum(numbers));

function sumUp(n) {
    if (n === 1) return 1;
    return sumUp(n - 1) + n;
}

console.log(5);

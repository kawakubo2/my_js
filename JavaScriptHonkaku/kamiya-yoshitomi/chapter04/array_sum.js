// array_sum.js

let numbers = [[1, 2, [3, 4], [5, [6, 7], 8], 9], 10];
function array_sum(nums) {
    let total = 0;
    for (const n of nums)
        if (Array.isArray(n)) 
            total += array_sum(n);
        else
            total += n;
    return total;
}

let sum = array_sum(numbers);
console.log(sum);
const numbers = [[1, 2], 3, [4, [5, 6, [7, 8], 9], 10]];

function mysum(nums) {
    let sum = 0;
    for (const n of nums) {
        if (Array.isArray(n)) {
            sum += mysum(n);
        } else {
            sum += n;
        }
    }
    return sum;
} 

console.log(mysum(numbers));

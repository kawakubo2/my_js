function factorial(n) {
    if (n > 0) {
        return n * factorial(n - 1)
    }
    return 1;
}

console.log(factorial(5));

// 0 1 1 2 3 5 8 13 21 34 55 
function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(10));

let numbers = [1, [2, 3], 4, [5, [6, 7, [8, 9]], 10]];

function array_recursive_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            total += array_recursive_sum(n);
        } else {
            total += n;
        }
    }
    return total;
}

console.log(array_recursive_sum(numbers));
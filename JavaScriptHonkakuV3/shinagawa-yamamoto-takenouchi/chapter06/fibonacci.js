const fibMap = new Map();

function fibonacci(n) {
    if (fibMap.has(n)) {
        return fibMap.get(n);
    }
    let result;
    if (n > 1) {
        result = fibonacci(n - 2) + fibonacci(n - 1);
    } else {
        result = n;
    }
    fibMap.set(n, result);
    return result;
}

console.log(fibonacci(55));
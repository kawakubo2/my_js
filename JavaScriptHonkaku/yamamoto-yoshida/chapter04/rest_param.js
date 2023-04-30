function sum1() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum1(1, 2, 4, 8, 16));

function sum2(...nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
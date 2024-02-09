function sum_up(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(sum_up(10));

function sum_up2(num) {
    if (num !== 1) return sum_up2(num - 1) + num;
    return 1;
}

console.log(sum_up2(10));
console.log(Math.max(1, 2, 3, 4, 22, 5, 6, 7, 8, 9));
console.log(Math.max());

let numbers = [-3, -7, -2, -1];

function max(nums) {
    let max = Number.NEGATIVE_INFINITY;
    for (let n of nums) {
        if (n > 0) {
            if (n > max) {
                max = n;
            }
        }
    }
    return max;
}

console.log(max(numbers));
console.log(Number.isFinite(max(numbers)));
console.log(Math.pow(2, 3));
console.log(2 ** 3);

for (let i = 0; i < 30; i++) {
    console.log(Math.floor(Math.random() * 11));
}

console.log(Math.ceil(0.0000001));
console.log(Math.floor(0.9999999));
console.log(8 ** (1/3));
let numbers = [3, -2, 4, 6, 5, -1, 7, 8, 2];

function* positiveEven(nums) {
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            yield n;
        }
    }
}

function* circleArea(gen) {
    for (let n of gen) {
        yield Math.pow(n, 2) * Math.PI;
    }
}

for (let n of circleArea(positiveEven(numbers))) {
    console.log(n);
}

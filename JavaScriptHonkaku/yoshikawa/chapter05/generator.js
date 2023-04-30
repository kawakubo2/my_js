const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function* even_gen(nums) {
    for (let n of nums) {
        if (n > 0 && n % 2 === 0) {
            yield n;
        }
    }
}

function* circle(gen) {
    for (const n of gen) {
        yield Math.pow(n, 2) * Math.PI;
    }
}

for (const n of circle(even_gen(numbers))) {
    console.log(n);
}
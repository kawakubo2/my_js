// gen_filter.js
function* filter(nums) {
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            yield n;
        }
    }
}

function* map(gen) {
    for (let r of gen) {
        yield Math.pow(r, 2) * Math.PI;
    }
}

let numbers = [-8, 7, 4, 3, 6, -5, 10, 2, 1];

for (let n of map(filter(numbers))) {
    console.log(n);
}
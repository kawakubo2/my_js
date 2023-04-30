// gen_map_filter.js
function* filter(test, nums) {
    for (const n of nums) {
        if (test(n)) {
            yield n;
        }
    }
}

function* map(func, gen) {
    for (const n of gen) {
        yield func(n);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const circle_area of map(r => r ** 2 * Math.PI, filter(n => n % 2 !== 0, numbers))) {
    console.log(circle_area);
}
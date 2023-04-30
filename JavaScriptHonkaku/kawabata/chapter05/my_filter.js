function *my_filter(numbers, filter) {
    for (let n of numbers) {
        if (filter(n)) {
            yield n;
        }
    }
}

let nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let n of my_filter(nums, m => m % 2 === 0)) {
//     console.log(n);
// }

function* my_map(gen, func) {
    for (let radius of gen) {
        yield func(radius);
    }
}

for (let area of my_map(my_filter(nums, n => n % 2 === 0 && n > 0), r => Math.pow(r, 2) * Math.PI)) {
    console.log(area);
}

let areas = nums.filter(n => n > 0 && n % 2 === 0).map(r => Math.pow(r, 2) * Math.PI);
for (let area of areas) {
    console.log(area);
}

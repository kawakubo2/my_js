function* range_gen(numbers, min, max) {
    for (const num of numbers) {
        if (num >= min && num <= max) {
            yield num;
        }
    }
}

function* convert_sqrt(nums) {
    for (const n of nums) {
        yield Math.sqrt(n);
    }
}

const nums = [58, 100, 92, 76, 88, 85, 96, -52, 38, 60, 120, 80];
/*
for (const n of range_gen(nums, 0, 100)) {
    console.log(n);
}
*/
for (const n of convert_sqrt(range_gen(nums, 0, 100))) {
    console.log(n);
}

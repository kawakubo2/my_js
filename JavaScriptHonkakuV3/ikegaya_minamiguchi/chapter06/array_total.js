const data = [
    1, 2, [3, 4, [5, 6], 7, [8, [9], 10]]
];

function array_total(numbers) {
    let total = 0;
    for (const n of numbers) {
        if (Array.isArray(n)) {
            total += array_total(n);
        } else {
            total += n
        }
    }
    return total;
}

console.log(array_total(data));
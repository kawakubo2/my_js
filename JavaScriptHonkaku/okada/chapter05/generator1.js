let numbers = [2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

function* positive_even_filter(nums) {
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            yield n;
        }
    }
}

function* circle_area(my_filter) {
    for (let n of my_filter) {
        yield Math.pow(n, 2) * Math.PI;
    }
}

for (let area of circle_area(positive_even_filter(numbers))) {
    console.log(area);
}

for (let area of numbers.filter(n => n > 0 && n % 2 == 0).map(r => Math.pow(r, 2) * Math.PI)) {
    console.log(area);
}
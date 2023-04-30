function* my_filter(nums) {
    for (let n of nums) {
        if (n % 2 == 0) {
            yield n;
        }
    }
}

function* my_map(gen) {
    for (let n of gen) {
        yield n ** 2;
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let n of my_map(my_filter(numbers))) {
    console.log(n);
}

let squares = numbers.filter(n => n % 2 === 0).map(n => n ** 2);
console.log(squares);
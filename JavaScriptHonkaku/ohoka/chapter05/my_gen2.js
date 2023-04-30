let numbers = [1, 2, 3, -1, 4, 5, 6, 7, -3, 8, 9, 10];

function* my_filter(numbers) {
    for (let n of numbers) {
        if (n >= 0) {
            yield n;
        }
    }
}

function my_filter2(numbers) {
    let result = [];
    for (let n of numbers) {
        if (n >= 0) {
            result.push(n);
        }
    }
    return result;
}

for (let n of my_filter2(numbers)) {
    console.log(n);
}
let numbers = [3, 1, 8, 12, 2, 18, 28];

numbers.sort(function(x, y) {
    return x - y;
});

console.log(numbers);

let float_numbers = [5.5, 2.28, 1.23, 5.28, 12.38, 28.51, 3.15];
float_numbers.sort(function(x, y) {
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
});

console.log(float_numbers.toString());
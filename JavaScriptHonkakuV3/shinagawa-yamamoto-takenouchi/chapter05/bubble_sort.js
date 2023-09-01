const numbers = [7, 12, 28, 9, 2, 10, 6, 23];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = numbers.length  - 1; j > i; j--) {
        if (numbers[j - 1] > numbers[j]) {
            let temp = numbers[j];
            numbers[j] = numbers[j - 1];
            numbers[j - 1] = temp;
        }
    }
}

console.log(numbers);

const numbers = [1, 2, 3, 4];

function double(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
}

console.log(numbers);
double(numbers);
console.log(numbers);
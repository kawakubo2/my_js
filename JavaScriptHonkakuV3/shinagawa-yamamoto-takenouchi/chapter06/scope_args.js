let value = 10;

function decrement(value) {
    value--;
    return value;
}
console.log(decrement(value));
console.log(value);

let numbers = [1, 2, 3, 4, 5];

function multiplyBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
    }
}

multiplyBy2(numbers);
console.log(numbers);
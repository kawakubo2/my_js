const numbers = [1, 2, 3, 4];

function double(numbers) {
    for (let num of numbers) {
        num *= 2;
    }
}

console.log(numbers);
double(numbers);
console.log(numbers);
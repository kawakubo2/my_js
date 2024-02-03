const numbers = [1, 2, 3, 4, 5];

function double_score(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    console.log(array);
}

double_score(numbers);
console.log(numbers);


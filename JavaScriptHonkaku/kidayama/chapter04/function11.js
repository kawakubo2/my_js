const numbers = [ 5, 2, 6, 7, 9, 3, 12, 10, 11]

function countMultipleOf3(nums) {
    let counter = 0;
    for (const n of nums) {
        if (n % 3 === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(countMultipleOf3(numbers));
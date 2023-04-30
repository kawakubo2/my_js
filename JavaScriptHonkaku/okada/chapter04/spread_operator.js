let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(sum(...numbers));
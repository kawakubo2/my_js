// spread operator
function sum(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

let numbers = [1, 2, 3, 4, 5, 6 ];
console.log(sum(...numbers));
console.log(sum(...[1, 2, 3, 4, 5, 6]));
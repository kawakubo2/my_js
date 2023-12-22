const numbers1 = [1, 2, 5, 9, 13];

let total = 0;
for (const n of numbers1) {
    total += n;
}

console.log("合計: " + total)


function array_sum(numbers) {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}

const a = array_sum(numbers1);
console.log(a);
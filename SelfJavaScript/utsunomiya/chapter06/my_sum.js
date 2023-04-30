function sum() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }
    return total;
}

console.log(sum());
console.log(sum(10));
console.log(sum(10, 20, 30, 40));
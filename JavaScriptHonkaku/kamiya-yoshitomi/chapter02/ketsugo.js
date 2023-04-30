let x = 0.2;
let y = 0.6;

console.log(x * 3);
console.log(x * 10 * 3 === y * 10);

let w = 1 + (1/2) + (1/2) ** 2 + (1/2) ** 3 + (1/2) ** 4;
console.log(w);

function func1() {
    let result = 0;
    for (let i = 0; i <= 30; i++) {
        result += (1/2) **(i);
    }
    return result;
}

console.log(func1());
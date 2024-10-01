/*
f(x) = x ** 2 + 2 * x + 1
*/
function polynominal(x) {
    return x ** 2 + x * 2 + 1;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
    console.log(polynominal(num));
}
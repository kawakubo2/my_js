/*
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
5! = 5 * 4 * 3!
5! = 5 * 4 * 3 * 2!
5! = 5 * 4 * 3 * 2 * 1!
5! = 5 * 4 * 3 * 2 * 1 * 0!
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2
5! = 5 * 4 * 6
5! = 5 * 24
5! = 120
*/

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
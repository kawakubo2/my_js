/*
5! = 5 * 4 * 3 * 2 * 1 * 1
5! = 120
*/

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
    
console.log(factorial(5));        

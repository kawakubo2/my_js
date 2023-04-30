let x = 123;
console.log(typeof x);
x = 'abc';
console.log(typeof x);
x = function (a, b) { a + b; };
console.log(typeof x);
x = true;
console.log(typeof x);
x = [1, 2, 3]
console.log(typeof x);
x = { name: 'Aoki', age: 13 };
console.log(typeof x);

function sum_up(n) {
    if (n === 1) return 1;
    return n + sum_up(n - 1);
}
console.log(sum_up(10));

const numbers = [1, 2, 3, 4];
if (typeof numbers === 'object' && numbers instanceof Array) {
    console.log('配列である');
}
if (Array.isArray(numbers)) {
    console.log('配列である');
}
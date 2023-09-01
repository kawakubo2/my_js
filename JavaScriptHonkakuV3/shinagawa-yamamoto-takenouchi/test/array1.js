const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11);
numbers.push(12);

const sum = numbers.filter(n => n % 2 === 0)
        .reduce((total, n) => total + n);
console.log(`合計: ${sum}`);

const add = (x, y) => x + y;
console.log(add(10, 20));

function add2(x, y) {
    return x + y;
}
console.log(add2(100, 200));
console.log(typeof add2);
add2 = 1000;

add2 = (x, y) => x + y;
console.log(add2(100, 200));
















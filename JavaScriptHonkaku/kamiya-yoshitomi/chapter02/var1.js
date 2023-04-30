const x = 10;

/*
    動的型付け言語・・・JavaScript、Python、PHP
    静的型付け言語・・・C、C++、Java、C#
*/

let y = 123;
console.log(typeof y);
y = 'abc';
console.log(typeof y);
y = true;
console.log(typeof y);
y = function(a, b) { return a + b;};
console.log(typeof y);

const numbers = [5, 2, 1, 8, 9, 4, 6, 7, 10, 3];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // *(numbers + i) ---> numbers[i]
}
console.log("合計: " + total);






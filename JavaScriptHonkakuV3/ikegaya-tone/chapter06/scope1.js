const numbers = [1, 2, 3, 4, 5, 6, 7];

let total1 = 0;
for (let i = 0; i < numbers.length; i++) {
    total1 += numbers[i];
}
console.log(`合計: ${total1}`);

let total2 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        total2 += numbers[i];
    }
}
console.log(`偶数の合計: ${total2}`);

{
    let x = 10;
    let y = 20;
    console.log(x + y);
}
// console.log(x + y);

let x = 40;
let y = 50;
{
    console.log(x + y);
}
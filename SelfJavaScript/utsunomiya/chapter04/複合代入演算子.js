let a = 10;
a += 5; // a = a + 5
console.log(a);
a -= 10;
console.log(a);
a *= 4;
console.log(a);
a /= 3;
console.log(a);

let numbers = [1, 2, null, 4, 5, null];
let total = 0;
for (let n of numbers) {
    total += (n ??= 0);
}
console.log(total);
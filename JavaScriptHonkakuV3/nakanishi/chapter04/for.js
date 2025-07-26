for (let i = 5; i < 10; i++) {
    console.log(`iの値は${i}`);
}

let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(`1～10までの合計: ${total}`);

/*
total = 0
for i in range(1, 11):
    total += i
print(f"1～10までの合計: {total}")
*/

for (let i = 0.0; i <= 1.0; i += 0.1) {
    console.log(i);
}

console.log('--------------------');

for (let i = 1; i <= 10; i++) {
    console.log(i / 10);
}

for (let i = 1, j = 1; i < 5; i++, j++) {
    console.log(`i * jは${i * j}`);
}
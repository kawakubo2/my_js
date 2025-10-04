const numbers = [1, 2, 3, 4, 5, 6];
console.log('--- forEachメソッド ---');
numbers.forEach(n => console.log(n ** 2 * Math.PI));
console.log('--- for文 ---')
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] ** 2 * Math.PI);
}
console.log('--- for of ---');
for (const r of numbers) {
    console.log(r ** 2 * Math.PI)
}
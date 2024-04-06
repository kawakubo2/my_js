const fruits = new Map([
    ['banana', 'バナナ'],
    ['apple', 'リンゴ'],
    ['orange', 'オレンジ']
]);

for (const key of fruits.keys()) {
    console.log(key);
}
for (const value of fruits.values()) {
    console.log(value);
}
for (const [key, value] of fruits.entries()) {
    console.log(`${key}: ${value}`);
}
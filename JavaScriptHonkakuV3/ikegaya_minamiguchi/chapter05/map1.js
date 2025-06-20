const data = new Map(
    [
        ['banana', 'バナナ'],
        ['apple', 'リンゴ'],
        ['grape', 'ブドウ'],
        ['strawberry', 'イチゴ'],
    ]
);

for (const key of data.keys()) {
    console.log(key);
}
for (const val of data.values()) {
    console.log(val)
}
for (const [key, val] of data.entries()) {
    console.log(`${key}: ${val}`);
}

console.log('-----------------------');
data.set('watermelon', 'スイカ');
for (const [key, val] of data.entries()) {
    console.log(`${key}: ${val}`);
}

data.set('strawberry', '苺');
for (const [key, val] of data.entries()) {
    console.log(`${key}: ${val}`);
}

console.log(data.get('banana'));

if (data.has('apple')) {
    data.set('apple', '林檎');
}
for (const [key, val] of data.entries()) {
    console.log(`${key}: ${val}`);
}
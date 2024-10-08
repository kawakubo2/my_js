const fruits = new Map();
fruits.set('apple', 'リンゴ');
fruits.set('orange', 'オレンジ');
fruits.set('grape', 'ブドウ');
fruits.set('cherry', 'チェリー');
// fruits.set('grape', '葡萄');

// console.log(fruits);

// const fruits = new Map([
//     ['apple', 'リンゴ'],
//     ['orange', 'オレンジ'],
//     ['grape', 'ブドウ'],
//     ['cherry', 'チェリー']
// ]);

/*
キーが存在するか調べる
*/
let key = 'grape';
if (fruits.has(key)) {
    console.log(fruits.get(key));
} else {
    console.log(`${key}は存在しません。`);
}

key = 'strawberry';
if (fruits.has(key)) {
    console.log(fruits.get(key));
} else {
    console.log(`${key}は存在しません。`);
}
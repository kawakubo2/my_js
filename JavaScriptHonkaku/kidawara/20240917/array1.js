const vegetables = ['potato', 'pumpkin', 'cabbege', 'cucumber'];

console.log('インデクスを使用する方法');
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

console.log('for of(配列専用の繰り返し構文)');
for (const vegetable of vegetables) {
    console.log(vegetable);
}

console.log('forEachメソッドを使用する方法')
vegetables.forEach(v => console.log(v));
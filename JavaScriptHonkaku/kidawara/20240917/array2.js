const vegetables = ['potato', 'pumpkin', 'cabbege', 'cucumber'];

console.log('インデクスを使用する方法');
for (let i = vegetables.length - 1; i >= 0; i--) {
    console.log(vegetables[i]);
}


console.log('for of(配列専用の繰り返し構文)');
for (const vegetable of vegetables.reverse()) {
    console.log(vegetable);
}

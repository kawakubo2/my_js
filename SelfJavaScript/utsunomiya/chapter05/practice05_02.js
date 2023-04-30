let value = '';
// console.log(value ?? 'Hello');
// (1) 条件演算子
console.log(value ? value : 'Hello');
// (2) if文
if (value) {
    console.log(value);
} else {
    console.log('Hello');
}
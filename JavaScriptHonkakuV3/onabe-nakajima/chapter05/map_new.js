const data = new Map([
    ['1st', 'ファースト'],
    ['2nd', 'セカンド'],
    ['3rd', 'サード']
]);

for (const [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
}
console.log('-------< .entries()ナシ >----------');
for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
}
console.log('-----------------');
const x = 8;
const y = 5;
console.log(`${x} * ${y} = ${x * y}`);

/*
エスケープ文字列: `${式}` `メッセージ: ${msg}` `${x} * ${y} = ${x * y}`;
*/
data.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
})
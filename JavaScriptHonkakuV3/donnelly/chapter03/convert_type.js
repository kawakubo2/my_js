console.log('number型からstring型への変換');
let n = 108;
console.log(`nのtype: ${typeof n}`);
n = n + '';  // +のオペランドの中に文字列が存在すれば、+は文字列連結とみなされる
console.log(`nのtype: ${typeof n}`);

console.log('string型からnumber型への変換');
let m = '108';
console.log(`mのtype: ${typeof m}`);
m = m - 0
console.log(`mのtype: ${typeof m}`);

console.log('string型からnumber型への正式な変換');
let a = '123';
console.log(`aのtype: ${typeof a}`);
a = Number.parseInt(a);
console.log(`aのtype: ${typeof a}`);

let ok_pattern = [ '1', '2', '+3', '-4', '45', '+67', '-78', '13872', '+39714', '-7187402',
                   '1.2', '2.3', '+3.4', '-4.5', '12.34', '+23.45', '-34.56', 
                   '1355.2353', '+3241.1355', '-3881880.135'];
let ng_pattern = [ '123.45.67', '123.', '.138', '1a', 'a2', '++13', '288-', '17387+', '--834298'];

let float_pattern = new RegExp('^(\\+|-)?\\d+$');

console.log('OKパターン');
for (let p of ok_pattern) {
    console.log(p + ":" + (float_pattern.test(p) ? '○': '×'));
}
console.log('NGパターン');
for (let p of ng_pattern) {
    console.log(p + ":" + (float_pattern.test(p) ? '○': '×'));
}

// let ja_isbn = new RegExp('^978-4-\\d{2,6}-\\d{2,6}-\\d$');

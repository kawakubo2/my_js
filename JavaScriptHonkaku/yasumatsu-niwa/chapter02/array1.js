const numbers = [5, 9, 1, 8, 4, 2, 10, 3, 7, 6];

if (typeof numbers === 'object' && numbers instanceof Array) {
    console.log('配列である。');
}
if (Array.isArray(numbers)) {
    console.log('配列である。');
}

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(11));

const numbers2 = [4, 2, 7, 8, 10, 1, 4, 3, 9, 4, 6];
console.log(numbers2.lastIndexOf(4));

console.log('---< concat 非破壊的 >---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const array2 = ['F', 'G', 'H', 'I', 'J'];
const array3 = array1.concat(array2);
console.log(`array1: ${array1.toString()}`);
console.log(`array2: ${array2.toString()}`);
console.log(`array3: ${array3.toString()}`);

console.log('---< join 非破壊的 >---');
const array4 = ['レヴォーグ', 'フィアット', 'レクサス', 'タント'];
console.log(array4.join(':'));

console.log('---< slice 非破壊的メソッド >---');
const array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j'];
for (let i = 0; i < array5.length; i += 3) {
    let end = i + 3 >= array5.length ? array5.length: i + 3;
    console.log(array5.slice(i, end));
}

console.log('---< splice 破壊的メソッド >---');
console.log('==削除==');
const array6 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j'];
console.log(`削除前: ${array6}`);
const array7 = array6.splice(2, 3);
console.log(`削除された要素: ${array7}`);
console.log(`削除後: ${array6}`);

console.log('==置換==');
const array8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j'];
console.log(`置換前: ${array8}`);
const array9 = array8.splice(2, 3, 'W', 'X', 'Y', 'Z');
console.log(`削除された要素: ${array9}`);
console.log(`置換後: ${array8}`);

console.log('==挿入==');
const array10 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j'];
console.log(`挿入前: ${array10}`);
const array11 = array10.splice(2, 0, 'W', 'X', 'Y', 'Z');
console.log(`削除された要素: ${array11}`);
console.log(`挿入後: ${array10}`);

console.log('---< Array.of >---');
const array12 = Array.of(1, 2, 3, 4, 5);
console.log(array12);

console.log('---< copyWithin 破壊的メソッド >---');
const array13 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'];
array13.copyWithin(1, 6, 8);
console.log(array13);

console.log('---< fillメソッド 破壊的メソッド >---');
const array14 = [38, 12, 98, 45, 87, 62, 72, 80];
array14.fill(0, 2, 5);
console.log(array14);

console.log('---< pop/push メソッドによるスタックの作成 >---');
const stack = [];
stack.push('A');
console.log(stack);
stack.push('B');
console.log(stack);
stack.push('C');
console.log(stack);
const e1 = stack.pop();
console.log(stack);
const e2 = stack.pop();
console.log(stack);
const e3 = stack.pop();
console.log(stack);

console.log('---< reverse 破壊的メソッド >---');
const array15 = [8, 5, 1, 10, 3, 4, 7];
array15.reverse();
console.log(array15);

console.log('---< sortメソッド 破壊的メソッド >---')
const array16 = [4, 12, 1, 3, 2, 18, 23];
array16.sort(function(x, y) {
    return x - y;
});
console.log(array16);

console.log('---< filter/map/reduce >---');
const array17 = [5, 1, 3, 4, 2, 8, 10, 7];

const array18 = [];
for (const n of array17) {
    if (n % 2 !== 0) {
        array18.push(Math.pow(n, 2) * Math.PI);
    }
}
console.log(array18);

const array19 = [5, 1, 3, 4, 2, 8, 10, 7];
const array20 = array19.filter(n => n % 2 !== 0)
                       .map(r => Math.pow(r, 2) * Math.PI);
console.log(array20);

let total1 = 0;
for (const n of array17) {
    if (n % 2 !== 0) {
        total1 += Math.pow(n, 2) * Math.PI;
    }
}
console.log(total1);

let total2 = array17.filter(n => n % 2 !== 0)
                    .map(r => Math.pow(r, 2) * Math.PI)
                    .reduce((total, n) => total + n);
console.log(total2);

console.log('---< every >---');
const array21 = [8, 4, 2, 5, 1, 3];
console.log(array21.every(n => n > 0));

console.log('---< some >---');
const array22 = [8, 4, -2, 5, 1, 3];
console.log(array21.some(n => n < 0));

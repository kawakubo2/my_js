let a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);
console.log(a1[3]);
console.log(a1[4]);
console.log(a1[5]);
console.log(a1.length);


console.log('---< for文で取得 >---');
for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}

console.log('---< for of文で取得 >---');
for (let c of a1) {
    console.log(c);
}

const numbers = [1, 2, 3, 4, 5];

for (let n of numbers) {
    n *= 2;
}

for (let n of numbers) {
    console.log(n);
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}

for (let n of numbers) {
    console.log(n);
}

if (typeof numbers === 'object' && numbers instanceof Array) {
    console.log('配列です');
}
if (Array.isArray(numbers)) {
    console.log('配列です');
}
console.log(numbers); // 配列の中身を確認するとき
console.log(numbers.toString()); // 配列を文字列に変換

console.log(a1.indexOf('E'));
console.log(a1.indexOf('Z'));

const names = ['山田', '田中', '鈴木', '山田', '山本'];

console.log(names.indexOf('山田'));
console.log(names.lastIndexOf('山田'));

const a2 = [1, 2, 3, 4];
const a3 = [10, 20, 30];
console.log('---< concat(非破壊的メソッド) >---');
console.log('a2=' + a2.toString());
console.log('a3=' + a3.toString());
const a4 = a2.concat(a3);
console.log('a4 = a2.concat(a3) ---> ', a4.toString());
console.log('a2=' + a2.toString());
console.log('a3=' + a3.toString());

console.log('---< join(非破壊的メソッド) >---');
const s1 = a1.join("\t");
console.log('const s1 = a1.join("\\t") --->', s1);
console.log('a1=' + a1.toString());

const s2 = a1.join("<->");
console.log('const s2 = a1.join("<->") --->', s2);
console.log('a1=' + a1.toString());

console.log('---< slice(非破壊的メソッド) >---');
console.log('a1=' + a1.toString() + 'の2番目から4番目(C, D, E)を取り出す');
const a5 = a1.slice(2, 5);
console.log('const a5 = a1.slice(2, 5) ---> ',  a5.toString());

console.log('sliceメソッドの引数は開始位置は含むが終了位置を含めないのか?');
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

for (let i = 0; i < 30; i += 3) {
    console.log(numbers2.slice(i, i + 3));
}
/*
console.log(numbers2.slice(0, 3));
console.log(numbers2.slice(3, 6));
console.log(numbers2.slice(6, 9));
console.log(numbers2.slice(9, 12));
console.log(numbers2.slice(12, 15));
console.log(numbers2.slice(15, 18));
console.log(numbers2.slice(18, 21));
console.log(numbers2.slice(21, 24));
console.log(numbers2.slice(24, 27));
console.log(numbers2.slice(27, 30));
*/

console.log('---< splice(破壊的メソッド) >---');
console.log('-< 削除メソッドとして >-');
console.log('a1=' + a1.toString());
const a6 = a1.splice(2, 3);
console.log('const a6 = a1.splice(2, 3) ---> ', a6);
console.log('a1=' + a1.toString());

a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log('-< 置換メソッドとして >-');
console.log('a1=' + a1.toString());
const a7 = a1.splice(2, 3, 'X', 'Y');
console.log("const a7 = a1.splice(2, 3, 'X', 'Y') ---> ", a7);
console.log('a1=' + a1.toString());

a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log('-< 挿入メソッドとして >-');
console.log('a1=' + a1.toString());
const a8 = a1.splice(2, 0, 'X', 'Y', 'Z');
console.log("const a8 = a1.splice(2, 0, 'X', 'Y', 'Z') ---> ", a8);
console.log('a1=' + a1.toString());

console.log('---< from(非破壊的メソッド) >---');
function sum() {
    const ary = Array.from(arguments);
    console.log(ary.toString());
    let total = 0;
    for (let n of ary) {
        total += n;
    }
    return total;
}
console.log(sum(1, 2, 3));

console.log('---< ofメソッド(非破壊的メソッド) >---');
const a9 = Array.of(1, 2, 3, 4, 5);
console.log('const a9 = Array.of(1, 2, 3, 4, 5) ---> ', a9);




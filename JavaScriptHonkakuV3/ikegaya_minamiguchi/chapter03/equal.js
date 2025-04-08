/*
基本型
number
string
boolean
*/
let x = 1;
let y = x;
console.log(`x=${x}, y=${y}`);
x = 2;
console.log(`x=${x}, y=${y}`);

/*
参照型
配列
連想配列
オブジェクト
*/

let data1 = [0, 1, 2];
let data2 = data1;
console.log('data1: ' + data1.toString());
console.log('data2: ' + data2.toString());
data2[0] = 5;
console.log('data2[0] = 5');
console.log('data1: ' + data1.toString());
console.log('data2: ' + data2.toString());
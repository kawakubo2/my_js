/*
 pop ----- 配列の末尾から1個削除
 push ---- 配列の末尾に引数で指定した要素を追加
 shift --- 配列の先頭から1個削除
 unshift - 配列の先頭に引数で指定した要素を追加
*/
let array1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log('---< popメソッド(破壊的メソッド) >---');
console.log("操作前array1:" + array1.toString());
const elem1 = array1.pop();
console.log('array1.pop() ---> ' + elem1);
const elem2 = array1.pop();
console.log('array1.pop() ---> ' + elem2);
console.log("操作前array1:" + array1.toString());

let array2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log('---< pushメソッド(破壊的メソッド) >---');
console.log("操作前array2:" + array2.toString());
array2.push("K", "L");
console.log('array2.push("K", "L") ---> ' + array2.toString());
array2.push("M");
console.log('array2.push("M") ---> ' + array2.toString());
console.log("操作前array2:" + array2.toString());

let array3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log('---< shiftメソッド(破壊的メソッド) >---');
console.log("操作前array3:" + array3.toString());
const elem3 = array3.shift();
console.log('array1.shift() ---> ' + elem3);
const elem4 = array3.shift();
console.log('array1.shift() ---> ' + elem4);
console.log("操作前array3:" + array3.toString());

let array4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log('---< unshiftメソッド(破壊的メソッド) >---');
console.log("操作前array4:" + array4.toString());
array4.unshift("W");
console.log('array4.unshift("W") ---> ' + array4.toString());
array4.unshift("X", "Y", "Z");
console.log('array4.unshift("M") ---> ' + array4.toString());
console.log("操作前array4:" + array4.toString());
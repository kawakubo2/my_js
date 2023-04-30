console.log('---< spliceメソッド(破壊的メソッド) >---');

let array1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log("削除メソッドとしてのsplice");
console.log("操作前array1: " + array1.toString());
const array2 = array1.splice(2, 6);
console.log('const array2 = array1.splice(2, 6) ---> ' + array2.toString());
console.log("操作後array1: " + array1.toString());

let array3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log("置換メソッドとしてのsplice");
console.log("操作前array3: " + array3.toString());
const array4 = array3.splice(2, 6, "X", "Y", "Z");
console.log('const array4 = array3.splice(2, 6, "X", "Y", "Z") ---> ' + array4.toString());
console.log("操作後array3: " + array3.toString());

let array5 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log("追加メソッドとしてのsplice");
console.log("操作前array5: " + array5.toString());
const array6 = array5.splice(2, 0, "X", "Y", "Z");
console.log('const array6 = array5.splice(2, 0, "X", "Y", "Z") ---> ' + array6.toString());
console.log("操作後array5: " + array5.toString());

const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log("操作前array7:" + array7.toString());
array7.fill(-1, 0, 10);
console.log('array7.fill(-1, 0, 10)');
console.log("操作後array7:" + array7.toString());

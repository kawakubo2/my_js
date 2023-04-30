let array1 = ["A", "B", "C", "D", "E"];
let array2 = ["X", "Y", "Z"];

console.log('---< concatメソッド >---');
console.log('操作前');
console.log('array1=' + array1.toString());
console.log('array2=' + array2.toString());
let array3 = array1.concat(array2);
console.log('let array3 = array1.concat(array2) ---> ' + array3.toString());
console.log('操作後');
console.log('array1=' + array1.toString());
console.log('array2=' + array2.toString());

console.log('---< joinメソッド >---');
const array4 = ['JavaScript', 'Python', 'PHP', 'C++', 'Java'];
const str1 = array4.join('---');
console.log("array4.join(',') ---> " + str1);

console.log('---< sliceメソッド >---');
const array5 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log('操作前');
console.log(array5.toString());
const array6 = array5.slice(2, 6);
console.log('const array6 = array5.slice(2, 6) ---> ' + array6.toString());
console.log('操作前');
console.log(array5.toString());

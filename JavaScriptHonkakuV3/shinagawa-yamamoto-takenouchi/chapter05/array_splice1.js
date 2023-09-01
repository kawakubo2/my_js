
console.log('===< 削除関数 >===');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前: ${array1}`);
console.log('const array2 = array1.splice(2, 3)');
const array2 = array1.splice(2, 3);
console.log(`array2: ${array2}`);
console.log(`array1: ${array1}`);

console.log('===< 置換関数 >===');
const array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前 :${array3}`);
console.log('const array4 = array3.splice(2, 3, "Y", "Z")');
const array4 = array3.splice(2, 3, "Y", "Z");
console.log(`array4: ${array4}`);
console.log(`array3: ${array3}`);

console.log('===< 挿入関数 >===');
const array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前: ${array5}`);
console.log('const array6 = array5.splice(2, 0, "Y", "Z")');
const array6 = array5.splice(2, 0, "Y", "Z");
console.log(`array6: ${array6}`);
console.log(`array5: ${array5}`);

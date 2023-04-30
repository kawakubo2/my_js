console.log('---< splice(削除関数) >---');
let array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log(`array1: ${array1.toString()}`);
let array2 = array1.splice(2, 3);
console.log(`array1.splice(2, 3) ---> ${array2.toString()}`);
console.log(`array1: ${array1.toString()}`);

console.log('---< splice(置換関数) >---');
let array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log(`array3: ${array1.toString()}`);
let array4 = array3.splice(2, 3, 'Y', 'Z');
console.log(`array3.splice(2, 3, 'Y', 'Z') ---> ${array4.toString()}`);
console.log(`array3: ${array3.toString()}`);

console.log('---< splice(挿入関数) >---');
let array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log(`array5: ${array5.toString()}`);
let array6 = array5.splice(2, 0, 'Y', 'Z');
console.log(`array5.splice(2, 0, 'Y', 'Z') ---> ${array6.toString()}`);
console.log(`array5: ${array5.toString()}`);
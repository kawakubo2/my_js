console.log('---< 削除メソッドとして >---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const array2 = array1.splice(2, 3); // start, deleteCount
console.log(`array1=${array1} array2=${array2}`);

console.log('---< 置換メソッドとして >---');
const array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const array4 = array3.splice(2, 3, 'X', 'Y');
console.log(`array3=${array3} array4=${array4}`);

console.log('---< 挿入メソッドとして >---');
const array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const array6 = array5.splice(2, 0, 'X', 'Y');
console.log(`array5=${array5} array6=${array6}`);

console.log('spliceとsliceは全く別物');
const array7 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const array8 = array7.slice(2, 5); // start, end
console.log(`array7=${array7} array8=${array8}`);

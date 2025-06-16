// 削除関数としてのsplice
const array1 = ['A','B','C','D','E','F','G','H','I','J','K'];
const result1 = array1.splice(3, 5);
console.log(`array1=${array1.toString()}`);
console.log(`result1=${result1.toString()}`);

// 置換関数としてのsplice
const array2 = ['A','B','C','D','E','F','G','H','I','J','K'];
const result2 = array2.splice(3, 5, 'X', 'Y', 'Z');
console.log(`array2=${array2.toString()}`);
console.log(`result2=${result2.toString()}`);

// 挿入関数としてのsplice
const array3 = ['A','B','C','D','E','F','G','H','I','J','K'];
const result3 = array3.splice(3, 0, 'X', 'Y', 'Z');
console.log(`array3=${array3.toString()}`);
console.log(`result3=${result3.toString()}`);

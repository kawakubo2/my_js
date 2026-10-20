const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(`array1: ${array1.toString()}`);
const array2 = array1.slice(1, 4);
console.log(`array1.slice(1, 4)の戻り値: ${array2.toString()}`);
console.log('sliceメソッドは非破壊的メソッドなのでarray1に変化はない');
console.log(`array1: ${array1.toString()}`);


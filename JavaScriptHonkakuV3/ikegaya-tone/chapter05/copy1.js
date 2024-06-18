const array1 = ['A', 'B', ['C', 'D']];

const array2 = [...array1];

console.log(array1 === array2);

array1[2][0] = 'X';

console.log(array1);
console.log(array2);
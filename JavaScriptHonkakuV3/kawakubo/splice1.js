const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const array3 = [ ...array1.filter(n => !array2.includes(n)), ...array2.filter(n => !array1.includes(n))];
console.log(array3);
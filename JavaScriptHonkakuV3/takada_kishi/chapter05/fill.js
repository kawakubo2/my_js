const array1 = [1, 2, 3, 4, 5];
console.log(array1)
array1.fill(0, 0, array1.length);
console.log(array1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array2);
array2.fill('-', 5, array2.length);
console.log(array2);
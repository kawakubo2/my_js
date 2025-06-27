const array1 = [4, 1, 1, 9, 2, 1, 2, 5];
const set1 = new Set(array1);
console.log(set1);
console.log(set1.size);
const array2 = Array.from(set1);
array2.sort((x, y) => x - y);
console.log(array2);
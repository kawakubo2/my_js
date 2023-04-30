const array1 = [1, 2, 3];
// array1 = [10, 20, 30];
Object.freeze(array1);
array1.push(4);
console.log(array1);
array1.shift();
console.log(array1);
const array1 = [18, 9, 1, 2, 6, 23, 5, 13];
console.log(`ソート前: ${array1}`);
array1.sort();
console.log('array1.sort()');
console.log(`ソート後: ${array1}`);

const array2 = [18, 9, 1, 2, 6, 23, 5, 13];
console.log(`ソート前: ${array2}`);
array2.sort(function(n1, n2) { return n1 - n2; });
console.log('array2.sort(function(n1, n2) {return n1 - n2;})');
console.log(`ソート後: ${array2}`);
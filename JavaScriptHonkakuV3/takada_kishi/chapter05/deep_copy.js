const list1 = [1, [2, 3, [4, 5], 6, 7, [8, 9], 10]];
const list2 = JSON.parse(JSON.stringify(list1));
console.log('ディープコピー前');
console.log(list1);
console.log(list2);

console.log('ディープコピー後');
list1[1][2][0] = 100;
console.log('list1[1][2][0] = 100;');
console.log(list1);
console.log(list2);

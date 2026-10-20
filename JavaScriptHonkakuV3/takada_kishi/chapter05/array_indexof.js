const array1 = ['A', 'B', 'X', 'C', 'D', 'X', 'E', 'F', 'X', 'G'];
const target = 'X';
console.log('--- indexOf ---');
const pos1 = array1.indexOf(target);
if (pos1 > 0) {
  console.log(`${target}は${array1.toString()}の${pos1}番目にあります。`);
} else {
  console.log(`${target}は${array1.toString()}には存在しません。`);
}

console.log('--- lastIndexOf ---');
const pos2 = array1.lastIndexOf(target);
if (pos2 > 0) {
  console.log(`${target}は${array1.toString()}の${pos2}番目にあります。`);
} else {
  console.log(`${target}は${array1.toString()}には存在しません。`);
}

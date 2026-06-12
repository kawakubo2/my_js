// const list = [5, 2, 10, 15, 'A', 29, 6, 31];
const list = [5, 2, 10, 15, 29, 6, 31];

if (list.every(num => typeof num === 'number')) {
  list.sort((m, n) => m - n); // Comparator
  console.log(list);
} else {
  console.log('数値型ではない要素が存在します。');
}

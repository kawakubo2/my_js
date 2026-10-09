const list = document.querySelectorAll('#list .external');
console.log(Array.isArray(list));
// for (const item of list) {
//   console.log(item.href);
// }
// console.log(list.item(0).href);
// console.log(list.item(1).href);
// console.log(list[0].href);
// console.log(list[1].href);

list.forEach(a => console.log(a.href));

const array = Array.from(list);
console.log(Array.isArray(array));
const a1 = document.createElement('a');
a1.href = 'https://haru-idea.jp/';
a1.classList.add('external');
array.push(a1);
console.log(array);
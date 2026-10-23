const img = document.querySelector('#logo');

console.log('--- title属性値の取得 ---');
console.log(img.getAttribute('title'));

console.log('--- すべての属性名と属性値を取得 ---');
const attrs = img.attributes;
for (const attr of attrs) {
  console.log(`${attr.name}: ${attr.value}`);
}
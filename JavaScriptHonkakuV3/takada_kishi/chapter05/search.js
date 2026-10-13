const titles = ['改訂3版JavaScript本格入門', 'ゲーム制作で覚えるJavaScript', 'JavaScript超入門', '苦しんで覚えるC言語'];

/*
部分一致
title LIKE '%JavaScript%' ---> title.includes('JavaScript')

前方一致
title LIKE 'JavaScript%' ---> title.startsWith('JavaScript')

後方一致
title LIKE '%JavaScript' --->> title.endsWith('JavaScript')
*/

console.log('--- 部分一致 ---');
for (const title of titles) {
  if (title.includes('JavaScript')) {
    console.log(title);
  }
}
console.log('--- 前方一致 ---');
for (const title of titles) {
  if (title.startsWith('JavaScript')) {
    console.log(title);
  }
}
console.log('--- 後方一致 ---');
for (const title of titles) {
  if (title.endsWith('JavaScript')) {
    console.log(title);
  }
}
console.log('--- 含まれないもの ---');
for (const title of titles) {
  if (!title.includes('JavaScript')) {
    console.log(title);
  }
}
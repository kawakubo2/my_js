const str = 'kokohadoko';

console.log(`前方一致検索: ${str.startsWith('ko')}`);
console.log(`後方一致検索: ${str.endsWith('ko')}`);
console.log(`部分一致検索: ${str.includes('ko')}`);

console.log(str.replaceAll('ko', '---'));
let str = 'こんにちは、世界！';

console.log(str.includes('世界')); // 部分一致
console.log(str.charAt(0));

let member = 'yamada taro';
console.log(member.startsWith('ya')); // 前方一致
console.log(member.endsWith('ro')); // 後方一致

let word = 'taro';
console.log(member.substring(member.indexOf(word)));

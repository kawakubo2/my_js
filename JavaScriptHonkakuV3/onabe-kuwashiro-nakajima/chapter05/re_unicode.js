const msg  = 'WINGSでは執筆メンバーを、どーんと募集中です。';

console.log('---< ひらがな >---');
console.log(msg.match(/[\p{sc=Hiragana}ー]+/gu));
console.log(msg.match(/[\p{scx=Hiragana}]+/gu));
// const result1 = msg.matchAll(/[ぁ-んー]+/gu);
// console.log(Array.from(result1).map(r => r[0]));

console.log('---< カタカナ >---');
console.log(msg.match(/[\p{sc=Katakana}ー]+/gu));
console.log(msg.match(/[\p{scx=Katakana}]+/gu));
// const result2 = msg.matchAll(/[ァ-ンー]+/gu);
// console.log(Array.from(result2).map(r => r[0]));

console.log('---< 漢字 >---');
console.log(msg.match(/[\p{sc=Han}]+/gu));

console.log('ー'.codePointAt(0));
console.log('ー'.codePointAt(0));
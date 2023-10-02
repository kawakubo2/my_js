const msg  = 'WINGSでは執筆メンバーをどーんと募集中です！';

console.log('---< ひらがな >---');
console.log(msg.match(/[\p{sc=Hiragana}ー]+/gu));
const result1 = msg.matchAll(/[ぁ-んー]+/gu);
for (const r of result1) {
    console.log(r[0]);
}
console.log('---< カタカナ >---');
console.log(msg.match(/[\p{sc=Katakana}ー]+/gu));
const result2 = msg.matchAll(/[ァ-ンー]+/gu);
for (const r of result2) {
    console.log(r[0]);
}
console.log('---< 漢字 >---');
console.log(msg.match(/[\p{sc=Han}]+/gu));

console.log('ー'.codePointAt(0));
console.log('ー'.codePointAt(0));
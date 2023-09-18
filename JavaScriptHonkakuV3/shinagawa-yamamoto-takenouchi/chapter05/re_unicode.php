let msg = 'WINGSでは、執筆執筆メンバを絶賛募集中です。';

console.log(msg.match(/[\p{sc=Hiragana}]+/gu));
console.log(msg.match(/[\p{sc=Katakana}]+/gu));
console.log(msg.match(/[\p{sc=Han}]+/gu));
console.log(msg.match(/[\p{Punctuation}]+/gu));
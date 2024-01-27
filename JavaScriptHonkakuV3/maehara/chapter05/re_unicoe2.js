const names = [
    "チャーリー　サトウ",
    "チャーリーサトウ",
    "チャリ　サトウ",
    "チャリサトウ",
];
// 前回の授業の最後の書き方
// const re = /^[\p{sc=Katakana}ー　]+$/gu;
const re = /^([\p{sc=Katakana}]|ー)+(　)?([\p{sc=Katakana}]|ー)+$/gu;
for (const name of names) {
    console.log(`${name}: ${re.test(name)}`);
}
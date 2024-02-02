const names = [
    "チャーリー　サトウ",
    "チャーリーサトウ",
    "チャリ　サトウ",
    "チャリサトウ",
];
// TODO 全角空白が必須であるかのように振る舞う。[\u{3000}]?
// const re = /^(([\p{sc=Katakana}])|\u{30FC})+[\u{3000}]?(([\p{sc=Katakana}])|\u{30FC})+$/gu;
const re = /^(([\p{sc=Katakana}])|\u{30FC})+[\p{Zs}]?(([\p{sc=Katakana}])|\u{30FC})+$/gu;
for (const name of names) {
    console.log(`${name}: ${re.test(name)}`);
}
const pattern = /^[\p{sc=Katakana}ー]+( |　)[\p{sc=Katakana}ー]+$/u;
const ok = ['ヤマダ　タロウ', 'ヨコヤマ ハナコ', 'タナ　カイチロウ', 'ジェフリー アーチャー'];

for (const s of ok) {
    console.log(`${s}はカタカナだけ？: ${pattern.test(s)}`);
}

const seperate = [
    ['スズキ', 'イチロウ'],
    ['チャーリー', 'サトウ'],
    ['ホシヤマ', 'ユウコ'],
    ['ジェフリー', 'アーチャー']
];

const pattern2 = /^[\p{sc=Katakana}ー]+$/u;
for (const a of seperate) {
    console.log('----------------');
    for (const s2 of a) {
        console.log(`${s2}: ${pattern2.test(s2)}`);
    }
}

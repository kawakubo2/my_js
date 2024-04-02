const str = 'ここはどこ';
console.log(str.replaceAll('ここ', '---'));

let str2 = 'わたしは、昨日夢を見ました。空を飛ぶ夢です。上昇を繰り返し、落ちてゆく不思議な夢。';
str2 = str2.replaceAll('。', '.').replaceAll('、', ',');
console.log(str2);

const alpha = { 'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ'};

let str3 = 'TANAKA君の血液型はBで、C言語を勉強しています。';

for (const c in alpha) {
    str3 = str3.replaceAll(c, alpha[c]);
}

console.log(str3);
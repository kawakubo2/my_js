function showResult(str, pattern) {
    const reg = new RegExp(pattern, 'g');
    const results = str.matchAll(reg);
    console.log(`正規表現 ${pattern}: 文字列: ${str}`);
    for (const result of results) {
        console.log(result[0]);
    }
    console.log('---------------');
}

const p1 = 'あい(?=うえ)';
const p2 = 'あい(?!うえ)';
const p3 = '(?<=。)あい';
const p4 = '(?<!。)あい';
const str1 = 'あいうえおかきくけこ';
const str2 = 'あいすべきサルですね。あいあいは';

showResult(str1, p1);
showResult(str2, p1);
showResult(str1, p2);
showResult(str2, p2);
showResult(str1, p3);
showResult(str2, p3);
showResult(str1, p4);
showResult(str2, p4);
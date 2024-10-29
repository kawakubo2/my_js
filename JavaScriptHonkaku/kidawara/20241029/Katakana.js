const name = '山田太郎';
for (let i = 0; i < name.length; i++) {
    console.log(`${name.charAt(i)}の文字コードは${name.codePointAt(i)}`);
}
// const A = 'A';
const x = 'ァ';
const y = 'ン';
console.log(x.codePointAt(0));
console.log(y.codePointAt(0));

console.log('---< カタカナ >---');
for (let i = x.codePointAt(0); i <= y.codePointAt(0); i++) {
    console.log(`${String.fromCharCode(i)}: ${i}`);
}
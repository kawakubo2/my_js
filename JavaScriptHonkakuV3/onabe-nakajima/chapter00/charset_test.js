// charset_test.js
const name = '山田太郎';

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + 'の文字コードは' + name.codePointAt(i));
}
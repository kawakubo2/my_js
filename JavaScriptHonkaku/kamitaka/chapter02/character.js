let name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ' の文字コードは ' + name.codePointAt(i));
}

for (let c = 65; c <= 90; c++) {
    console.log(String.fromCodePoint(c) + ' の文字コードは ' + c);
}
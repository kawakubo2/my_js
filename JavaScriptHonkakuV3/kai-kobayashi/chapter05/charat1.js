const name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
    console.log(`${name.charAt(i)}の文字コードは${name.codePointAt(i)}`);
}

console.log('ABC\vDEF');
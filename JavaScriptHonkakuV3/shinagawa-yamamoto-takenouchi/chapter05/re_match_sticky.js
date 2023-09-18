const code = 'const HOGE = "ほげ"';
const re = /[A-Z0-9_]+/y;

re.lastIndex = 7;
console.log(code.match(re));
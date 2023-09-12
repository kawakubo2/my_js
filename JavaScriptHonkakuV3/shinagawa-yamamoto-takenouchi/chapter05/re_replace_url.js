let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
const str = 'サポートサイトはhttp://www.example.com/です。';

// css(Cross Site Scripting脆弱性)対策されていない
document.write(str.replace(re, '<a href="$&">$&</a>'));

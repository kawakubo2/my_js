const p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
const str = 'サポートサイトはhttp://www.wings.msn.to/です。';
document.write(str.replace(p, '<a href="$1">$1</a>'));
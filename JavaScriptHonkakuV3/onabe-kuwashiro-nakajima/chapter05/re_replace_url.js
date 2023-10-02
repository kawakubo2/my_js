let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- \/?%&=]*)?/gi;
let str = 'サポートサイトはhttp://haru-idea.jp/です。';

document.write(str.replace(re, '<a href="$&">$&</a>'));
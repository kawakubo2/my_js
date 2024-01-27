const re = /http(s)?:\/\/([\w-]+\.)+[\w]+(\/[\w- .\/?%&=]*)?/gi;
const str = `サポートサイトはhttp://haru-idea.jp/です。
            サンプル紹介サイトはHTTPS://www.web-deli.com/もよろしく！`;

// function create_anchor(href_value, text) {
//     const anchor = document.createElement('a');
//     anchor.href = href_value;
//     anchor.textContent = text;
//     return anchor;
// }

document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    result.innerHTML = str.replace(re, '<a href="$&">$&</a>');
});
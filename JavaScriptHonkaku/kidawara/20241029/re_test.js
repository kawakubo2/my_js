// const re = /[0-9]{3}-[0-9]{4}/;
const re = new RegExp('[0-9]{3}-[0-9]{4}');

const str1 = '郵便番号は123-4567です。';
const str2 = '住所は北海道小樽市1-2-3です。';

console.log(re.test(str1));
console.log(re.test(str2));
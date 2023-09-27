const str1 = "2023-08-14";
const pos1 = str1.indexOf("-");
console.log(str1.substring(0, pos1));

// 配列の分割代入
const [year, month, date] = str1.split("-");
console.log(`年: ${year}`);
console.log(`月: ${month}`);
console.log(`日: ${date}`);

const url = "https://abc.xyz.com/drink/coffee/mocha";
const pos2 = url.lastIndexOf('/');
console.log(url.substring(pos2 + 1));


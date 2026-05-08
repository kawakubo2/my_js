const readline = require('readline-sync');

const year = Number(readline.question('年: '));
const month = Number(readline.question('月: '));
const day = Number(readline.question('日: '));

const date = new Date(year, month - 1, day);

if (date.getFullYear() !== year ||
    (date.getMonth() + 1) !== month ||
    date.getDate() !== day) {
  console.log(`${year}年${month}月${day}日は暦上存在しません`);
  console.log(date.toLocaleDateString());
} else {
  console.log(`${year}年${month}月${day}日は暦上存在します`);
}
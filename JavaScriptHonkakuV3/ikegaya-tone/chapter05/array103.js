const members1 = ['田中', '山田', '山本', '田中', '田中', '鈴木', '佐藤', '田中'];
const name = '田中';
let index = -1;
while ((index = members1.indexOf(name)) > -1) {
    members1.splice(index, 1);
}
console.log(members1);

// members2の田中さんを残したい場合
const members2 = ['田中', '山田', '山本', '田中', '田中', '鈴木', '佐藤', '田中'];
const members3 = members2.filter((m) => m !== '田中');
console.log(members3);
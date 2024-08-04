const myconsole = name => message => console.log(`${name}: ${message}`);

const user1 = myconsole('山田太郎');
const user2 = myconsole('鈴木次郎');

user1('今日の会議の資料できましたよ。');
user2('あ、あれ？あの会議中止ね');
user1('勘弁してくださいよ～');
user2('うふふふ。。。');

const tax = rate => price => Math.floor(price * rate);
const tax08 = tax(0.08);
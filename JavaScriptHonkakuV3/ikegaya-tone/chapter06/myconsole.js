function myconsole(username) {
    return function(message) {
        console.log(`${username}[${new Date().toLocaleTimeString()}]: ${message}`);
    }
}

const user1 = myconsole('鈴木');
const user2 = myconsole('田中');
const user3 = myconsole('佐々木');

user1('今日の午後の資料作りました！');
user2('あ、あれ。中止になったよ。');
user1('(うっそー徹夜したのに)そうすか・・・');
user3('ヒヒヒ・・・');
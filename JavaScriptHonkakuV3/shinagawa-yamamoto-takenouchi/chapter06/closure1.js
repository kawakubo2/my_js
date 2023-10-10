function myconsole(name) {
    return function(message) {
        console.log(`${name}: ${message}`);
    }
}

const user1 = myconsole('田中');
const user2 = myconsole('鈴木');

user1('こんにちは。');
user2('こんにちは。明日から連休ですね。');
user1('でも、見積もり審査会が午後からあるので憂鬱です。');
user2('それは大変ですね。近藤取締役が厳しいチェックをしますからね。');
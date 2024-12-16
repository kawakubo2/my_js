// カリー化
function myconsole(name) {
    return function(message) {
        console.log(`【${name}】: ${message}`);
    }
}

const user1 = myconsole('山本');
const user2 = myconsole('斎藤');

user1('今日の会議の資料できました！');
user2('あ、あれ。あれ中止ね。');
user1('...徹夜して作ったのに...');
user2('ふふふぅ');
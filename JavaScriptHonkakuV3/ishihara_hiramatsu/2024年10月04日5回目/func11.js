/*
発言者とそのメッセージを表示する
*/
function myconsole(name, message) {
    console.log(`${name}: ${message}`);
}

myconsole('山田', '今日は少し寒いね');
myconsole('鈴木', 'ほんと、先週まだ涼しかったのにね');
myconsole('山田', 'Tシャツ1枚で来たのは失敗かな');
myconsole('鈴木', 'しかし、明日から日中は気温上がりそうですよ。');

// カリー化
function myconsole2(name) {
    return function(message) {
        console.log(`${name}: ${message}`);
    }
}

const user1 = myconsole2('山田');
const user2 = myconsole2('鈴木');

user1( '今日は少し寒いね');
user2('ほんと、先週まだ涼しかったのにね');
user1('Tシャツ1枚で来たのは失敗かな');
user2('しかし、明日から日中は気温上がりそうですよ。');

function tax(rate) {
    return function(price) {
        return Math.floor(price * rate);
    }
}

const tax08 = tax(0.08);
const tax10 = tax(0.1);

const price = 1000;
console.log(`消費時(8%): ${tax08(price)}`);
console.log(`消費時(10%): ${tax10(price)}`);
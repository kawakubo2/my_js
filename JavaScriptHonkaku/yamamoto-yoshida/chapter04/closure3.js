// カリー化
// const myconsole = name => {
//     return message => console.log(`${name}: ${message}`);
// };

const myconsole = name => message => console.log(`${name}: ${message}`);

function console_basic(name) {
    return function(message) {
        console.log(`${name}: ${message}`);
    }
}

const myconsole1 = myconsole('山田');
const myconsole2 = myconsole('鈴木');
const myconsole3 = console_basic('佐藤');

myconsole1('おはようございます');
myconsole2('おはよう。何か用？');
myconsole1('今日の午後からの会議はどの会議室ですか？');
myconsole2('あ、あれ。中止だよ');
myconsole1('そんなあ。。。(もっと早く言ってくださいよ)');
myconsole3('(お前だけしらない...ふふふ)');

const tax = rate => price => Math.floor(price * rate);

const tax08 = tax(0.08);
const tax10 = tax(0.10);

const price = 1000;
console.log(tax10(price));
console.log(tax08(price));
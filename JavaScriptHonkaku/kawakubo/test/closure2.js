// console.log("佐藤: おはよう！");
// console.log("鈴木: おはようございます！");
// console.log("佐藤: 昨日の議事録できた。");
// console.log("鈴木: まだなんですよ。。。");

function myconsole(name) {
    return function(msg) {
        console.log(`${name}: ${msg}`);
    }
}

const myconsole2 = (name) => (msg) => console.log(`${name}: ${msg}`);

const mem1 = myconsole("佐藤");
const mem2 = myconsole("鈴木");

mem1("おはよう");
mem2("おはようございます！");
mem1("昨日の議事録できた？");
mem2("う、まだなんです。。。");

console.log('-------------------');

const mem3 = myconsole2("佐藤");
const mem4 = myconsole2("鈴木");

mem3("おはよう");
mem4("おはようございます！");
mem3("昨日の議事録できた？");
mem4("う、まだなんです。。。");
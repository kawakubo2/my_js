function myconsole(name) {
    return function(message) {
        console.log(`${name}さん(${(new Date()).toLocaleTimeString()}): ${message}`);
    }
}

const console1 = myconsole('鈴木');
const console2 = myconsole('田中');

console1('今日の午後からの会議の資料できました！');
console2('あ、あの会議中止になったよ。');
console1('い、いつですか？');
console2('昨日の夕方かな。');
console1('(早く言ってくださいよ。徹夜したのに...)');
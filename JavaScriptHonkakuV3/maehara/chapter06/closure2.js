console.log('山田: おはよう！');
console.log('鈴木: おはようございます！');
console.log('山田: 今日の会議の資料準備できた？');
console.log('鈴木: か、か、会議の資料ってなんですか？');
console.log('山田: あ、間違えた佐々木君に頼んでた。');
console.log('鈴木: (冗談やめてよ。。。。');

function mylog(name) {
    return function(message) {
        console.log(`${name}: ${message}`);
    }
}
const m1 = mylog('山田');
const m2 = mylog('鈴木');
m1('お疲れさん！');
m2('お疲れ様です。');
m1('例の資料、明日までにメールに添付して送って');
m2('し、し、資料って？');
m1('嘘ぴょーん');
m2('(まったく!!!)');

const mylog2 = name => message => console.log(`${name}: ${message}`);
const m11 = mylog2('山田');
const m22 = mylog2('鈴木');
m11('お疲れさん！');
m22('お疲れ様です。');
m11('例の資料、明日までにメールに添付して送って');
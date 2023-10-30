function myconsole(name) {
    return function(str) {
        console.log(`${name}: ${str}`);
    }
}

const p1 = myconsole('田中一郎');
const p2 = myconsole(`星山裕子`);

p1('明日の定例会議は何時から?');
p2('13時からです。');
p1('その時間帯は山田課長が都合悪いから15時からに変更してもらえないかな?');
p2('(早く言えよ...)承知しました。');
const myconsole = name => {
    return message => {
        console.log(`${name}: ${message}`);
    }
};

const taro = myconsole("山田太郎");
const hanako = myconsole("横山花子");
// カリー化
taro("今日は13時間労働で疲れています。");
hanako("私は定時上がりです");
taro("でも、今から飲みに行くよ！");
const mytax = rate => {
    return price => price * rate;
};

const tax08 = mytax(0.08);
const tax10 = mytax(0.10);

console.log(tax08(1250));
console.log(tax10(3000));



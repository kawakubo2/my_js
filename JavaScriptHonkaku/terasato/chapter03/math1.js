// 0～100までの正数乱数
let zero = false;
let hundred = false;
for (let i = 0; i < 10000; i++) {
    let rand = Math.floor(Math.random() * 101);
    if (rand < 0 || rand > 100) {
        console.log('不正な乱数が発生しました。');
        break;
    }
    if (rand === 0) {
        zero = true;
    }
    if (rand === 100) {
        hundred = true;
    }
}
console.log(zero ? '0が発生しました。' : '0は発生しませんでした。見直してください。');
console.log(hundred ? '100が発生ました。' : '100は発生しませんでした。見直してください。');


console.log(Math.floor(Math.random() * 11) + 10);

let x = 6;
let y = 8;
console.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
console.log(Math.hypot(x, y));
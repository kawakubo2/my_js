let min = 50;
let max = 100;

let max_flag = false;
let min_flag = false;
for (let i = 0; i < 1_000_000; i++) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    if (r < min || r > max) {
        console.log('不正な乱数です。');
        break;
    }
    if (r === max) {
        max_flag = true;
    }
    if (r === min) {
        min_flag = true;
    }
}

if (!max_flag) {
    console.log('最大値が発生していません');
}
if (!min_flag) {
    console.log('最小値が発生していません');
}
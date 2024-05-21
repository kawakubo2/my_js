let age = 75;
let car = false;
let gender = 'male';

console.log('いらっしゃいませ～！');
if (age >= 20 && !car) {
    console.log('お酒の提供は可能です。');
} else {
    console.log('お酒の提供はできません。');
}

if (gender === 'female' || age >= 60) {
    console.log('本日はビールが半額です');
}
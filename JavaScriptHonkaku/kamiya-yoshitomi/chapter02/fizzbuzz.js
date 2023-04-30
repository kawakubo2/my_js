/*
    3の倍数は'fizz'、
    5の倍数は'buxx'、
    3かつ5の倍数は'fizzbuzz'、
    それ以外はそのままの数字を
    表示する
*/

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}
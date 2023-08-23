/*
3で割り切れる数値は「Fizz」、5で割り切れる数値は「Buzz」
3でも5でも割り切れない場合はそののままの数値を表示する。
1   1
2   2
3   Fizz
4   4
5   Buzz
6   Fizz
7   7
8   7
9   Fizz
10  Buzz
11  11
12  Fizz
13  13
14  14
15  FizzBuzz
16  16
*/

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);       
    }
}
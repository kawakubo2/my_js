/*
 引数あり、戻り値なし
*/
function greet(name) {
    console.log(name + "さん、こんにちは。");
}

greet('山田');

/*
 引数あり、戻り値あり
*/
function greet2(name) {
    return name + 'さん、こんにちは。';
}

let g = greet2('田中');
console.log(g);
console.log(greet2('鈴木'));

/*
 引数なし、戻り値あり
*/
function now() {
    return new Date();
}

function now_str() {
    let today = new Date();
    return today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
}

console.log(now().toLocaleDateString());
console.log(now_str());

/*
 1からnumまでの合計値を求めて返す関数
*/
function calcSum(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

let n = 10;
console.log(`${n}までの総和: ${calcSum(n)}`);
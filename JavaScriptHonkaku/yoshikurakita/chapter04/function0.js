/*
三角形の面積を求める関数

引数
---------------------
base   number : 底辺
height number : 高さ

戻り値  number
---------------------
底辺と高さの積を2で割った値
*/
function getTriangle(base, height) {
    return base * height / 2;
}

console.log('三角形の面積: ' + getTriangle(5, 2));

function getTrapezoid(upperBase, lowerBase, height) {
    return (upperBase + lowerBase) * height / 2;
}

console.log('台形の面積: ' + getTrapezoid(12.8, 7.2, 10));

// 1～nまで総和を返す関数
function getSum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i; // total = total + i;
    }
    return total;
}
console.log(`1～nまでの総和: ${getSum(10)}`);

// 2からnまでの偶数の総和を返す関数
function getEvenSum(n) {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
        total += i;
    }
    return total;
}

console.log(getEvenSum(10))

let n = 317;
let total = 0;
let start = new Date();
for (let i = 317; i <= 1_000_000_000; i += 317) {
    total += i;
}
let end = new Date();
console.log(`処理時間: ${end - start}`);
console.log(`合計: ${total}`);

function totalOfMultipliesOf(n, max) {
    let total = 0;
    for (let i = n; i <= max; i += n) {
        total += i; 
    }
    return total;
}

console.log(totalOfMultipliesOf(317, 1_000_000_000));

function sub(x, y) {
    return x - y;
}
console.log(sub(10, 18));
// 関数定義
function add(x, y) { // x, yを仮引数(parameter)
    return x + y;
}

let a = 100;
let b = 80;
// add(a, b)を関数呼び出しと呼び、本体側は関数からreturnで帰るまで待機している
let c = add(a, b); // a, bを実引数(arguments)
console.log(`${a} + ${b} = ${c}`);

/**
 * @param {number} x 
 * @param {number} y 
 * 
 * @returns x + yの和と差を配列に格納して返す
 */
function sum_diff(x, y) {
    return [x + y, x > y ? x - y: y - x];
}

const n1 = 100;
const n2 = 125;

const result = sum_diff(n1, n2);
console.log(`和: ${result[0]}`);
console.log(`差: ${result[1]}`);

// 分割代入
const [ wa, sa ] = sum_diff(n1, n2);
console.log(`和: ${wa}`);
console.log(`差: ${sa}`);

function diff(a, b) {
    return a > b ? a - b: b - a;
}
function diff_point(x1, y1, x2, y2) {
    return Math.sqrt(diff(x1, x2) ** 2 + diff(y1, y2) ** 2);
}

// p1 (2, 4), p2 (6, 1)
const x1 = 2;
const y1 = 4;
const x2 = 6;
const y2 = 1;

const distance = diff_point(x1, y1, x2, y2);

console.log(`2点間の距離: ${distance}`);
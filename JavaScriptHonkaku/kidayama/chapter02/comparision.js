// comparison.js
let x = 10;
let y = '10';

// ==を「等価演算子」と呼ぶ
if (x == y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

// ===を「同値演算子」と呼ぶ。値と型が等しい時にtrueとなる
if (x === y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
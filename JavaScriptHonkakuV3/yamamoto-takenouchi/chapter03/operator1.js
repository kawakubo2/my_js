let a = '10';
let b = 10;

// 等価演算子
if (a == b) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

// 厳密な等価演算子(型まで一致した場合、等しいとみなす)
if (a === b) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

if (Number.parseInt(a) === b) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
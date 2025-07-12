let a =  10;
let b = '10';

if (a == b) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

if (a === b) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

if (a === Number.parseInt(b)) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let age = 15;
console.log(age >= 18 ? "成人": "未成年");
age = 25;
console.log(age >= 18 ? "成人": "未成年");

let address1 = '福岡県福岡市';
let address2; // 宣言だけの場合、undefinedという値になる
let address3 = null;

console.log(address1 ?? '住所不定');
console.log(address2 ?? '住所不定');
console.log(address3 ?? '住所不定');
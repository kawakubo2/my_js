let a = 10;
let b = '10';

console.log(a == b); // 等価演算子
console.log(a === b); // 同値演算子(厳密な等価演算子)

let f1 = 0; // falsyな値
let f2 = '';
let f3 = undefined;
let f4 = null;
let f5 = NaN;

console.log('--------')
console.log(f1 == false);
console.log(f2 == false);
/*
undefined, null, NaNは
== falseで比較してもtrueとはならない
*/
console.log(f3 == false);
console.log(f4 == false);
console.log(f5 == false);

console.log('--------')
console.log(Boolean(f1));
console.log(Boolean(f2));
console.log(Boolean(f3));
console.log(Boolean(f4));
console.log(Boolean(f5));

if (f3) {
    ;
} else {
    console.log('FALSE');
}
if (f4) {
    ;
} else {
    console.log('FALSE');
}
if (f5) {
    ;
} else {
    console.log('FALSE');
}

// JavaScriptは空の配列をfalseとはみなさない
//
let t1 = [];
let t2 = {};
if (t1) {
    console.log('TRUE');
}
if (t2) {
    console.log('TRUE');
}

/*
JSP(Java Server Pages)の場合
int score = 80;
<span style="color:<%=(score >= 60 ? 'Blue': 'Red') %>"><%=(score >= 60 ? "合格": "不合格" %></span>
*/
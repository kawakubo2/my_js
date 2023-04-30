let x;
let obj = {x: 1, y: 2}

/*
宣言はしたが、初期化していない変数
または、連想配列のキーが存在しない場合
undefinedになる
*/
console.log(x);
console.log(obj['z']);

function add1(x, y) {
    return x + y;
}
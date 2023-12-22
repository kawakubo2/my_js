/**
数値型の引数の和を返す関数
@parameter: x: float型
@parameter: y: float型
@returns:  xとyの和
*/
// 関数定義
/*
function 関数名(仮引数1, 仮引数2, ...) {
    処理本体;
    return 戻り値;
}
*/
function add(x, y) {
    return x + y;
}

const a = 240;
const b = 180;

const c = 100;
const d = 240;
/*
関数呼び出し
関数名(実引数1, 実引数2, ...);
*/
const answer1 = add(a, b);
console.log(answer1);

const answer2 = add(c, d);
console.log(answer2);

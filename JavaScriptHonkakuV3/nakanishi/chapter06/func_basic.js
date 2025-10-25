/*
 * 関数定義
 * function 関数名(仮引数1, 仮引数2, ...) {
 *     処理;
 *     return 戻り値;
 * }
 */
function getTriangleArea(base, height) {
    return base * height / 2;
}

const b = 10;
const h = 4;
/*
 * 関数呼び出し
 * const 戻り値を受け取る変数 = 関数名(実引数1, 実引数2, ...);
 */
const area = getTriangleArea(b, h);
console.log(area);
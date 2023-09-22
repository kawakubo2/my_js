/*
関数定義
getTriangleArea ・・・関数名
base, height    ・・・仮引数(parameter)
*/
function getTriangleArea(base, height) {
    return base * height / 2; // 戻り値(返り値)
}

const area = getTriangleArea(10, 4); // 関数呼び出し  10や4は実引数(argument)
console.log(area);

const b = 5;
const h = 8;
const area2 = getTriangleArea(b, h);
console.log(area2);
/*
関数定義
getTriangleArea                --- 関数名
base, height                   --- 仮引数(parameter)
returnの後ろのbase * height / 2 --- 戻り値(返り値)
*/
function getTriangleArea(base, height) {
    return base * height / 2;
}

/*
関数呼び出し --- getTriangleArea(10, 4)
10, 4       --- 実引数(arguments)
area        --- 戻り値を格納するための変数
*/
let area = getTriangleArea(10, 4);
console.log(area);

const b = 12;
const h = 8;
area = getTriangleArea(b, h);
console.log(`底辺が${b}、高さが${h}の三角形の面積は${area}`);
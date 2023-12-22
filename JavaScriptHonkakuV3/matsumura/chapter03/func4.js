/*
円周率はMath.PIを使用
半径を引数として受け取り円の面積を返す関数
*/
function circle_area(radius) {
    return radius ** 2 * Math.PI;
}

const r = 100;
const area = circle_area(r);

console.log("半径が" + r + "の円の面積は" + area);

const array = [1, 2, 3, 4, 5];

/*
要素として円の半径を格納した配列を引数として受け取り
円の面積の合計を計算して返す関数
*/
function total_circle_area(radiuses) {
    let sum = 0;
    for (const radius of radiuses) {
        //sum += circle_area(radius);
        sum += radius ** 2 * Math.PI;
    }
    return sum;
}

const total_area = total_circle_area(array);
console.log("円の面積の合計: " + total_area);
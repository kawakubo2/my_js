const rectangles = [
    {width: 5.00, height: 4.00},
    {width: 3.41, height: 2.39},
    {width: 4.12, height: 3.09},
    {width: 7.89, height: 2.15},
    {width: 3.40, height: 6.73},
];

/*
引数: widthとheightのプロパティを持ったオブジェクトの配列
戻り値: widthとheightから長方形の面積を計算し、全ての長方形の
        面積を返す
*/
function rectangle_total_area(rects) {
    let total = 0;
    for (const rect of rects) {
        total += rect['width'] * rect['height'];
    }
    return total;
}

const total_area = rectangle_total_area(rectangles);
console.log(`合計面積: ${total_area}`);

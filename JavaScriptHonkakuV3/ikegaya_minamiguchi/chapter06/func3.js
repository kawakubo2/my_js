/*
引数に長方形の幅(width)と高さ(height)を受け取り
その面積を計算した値を返す関数
*/
function getRectangleArea(width, height) {
  return width * height;
}

const w = 10;
const h = 20;

console.log(`幅が${w}、高さが${h}の長方形の面積は${getRectangleArea(w,h)}`);

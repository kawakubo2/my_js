function getTriangleArea(base, height) {
  if (typeof base !== 'number' || base <= 0) {
    throw Error("底辺の型が不正か、0以下の値です。"); // 例外を投げる
  }
  if (typeof height !== 'number' || height <= 0) {
    throw new Error("高さの型が不正か、0以下の値です。"); // 例外を投げる
  }
  return base * height / 2;
}

// 実引数と仮引数の名前は一致しなてもよい
let b = 10;
let h = 20;
let area = getTriangleArea(b, h);
console.log(`底辺が${b}、高さが${h}の三角形の面積は${area}`);

try {
  area = getTriangleArea(10, -20);
  console.log(`三角形の面積は${area}`);
} catch (e) { // 例外を捕捉
  console.log(e.message);
}
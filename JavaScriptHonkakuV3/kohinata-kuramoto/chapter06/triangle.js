const readline  = require('readline-sync');

function getTriangleArea(base, height) {
  if (base <= 0) {
    throw new Error(`底辺が0以下の値: ${base}`);
  }
  if (height <= 0) {
    throw new Error(`高さが0以下の値: ${height}`);
  }
  return base * height / 2;
}

while (true) {
  try {
    console.log('三角形の面積を求めます(終了はxxx): ');
    const b = readline.question('底辺: ');
    if (b === "xxx") break;
    const base = Number(b);
    const h = readline.question('高さ: ');
    if (h === "xxx") break;
    const height = Number(h);
    const a = getTriangleArea(b, h);
    console.log(`面積: ${a}`);
  } catch (e) {
    console.log(e.message);
  }
}

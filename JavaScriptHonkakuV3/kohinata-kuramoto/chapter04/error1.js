const readline = require('readline-sync');

function add(x, y) {
  if (typeof x !== 'number') {
    throw new TypeError(`xが数値型ではありません: ${x}`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`yが数値型ではありません: ${y}`);
  }
  return x + y;
}

function circle_area(radius) {
  if (radius <= 0) {
    throw new RangeError(`半径が正の数値ではない: ${radius}`);
  }
  return radius ** 2 * Math.PI;
}

let area;
do {
  try {
    const r = Number(readline.question('半径: '));
    area = circle_area(r);
    console.log(`半径${r}の円の面積は${area}`);
  } catch(e) {
    area = null;
    console.log(e.message);
  }
} while (area == null);
// const getCircleArea = (radius) => { return radius ** 2 * Math.PI; };

// 引数が1個の場合のみ、()を省略できる
// const getCircleArea = radius => { return radius ** 2 * Math.PI; };

// 処理本体に文が1つしかない場合、returnと{}も省略できる
const getCircleArea = radius => radius ** 2 * Math.PI;

const r = 10;
console.log(`半径が${r}の円の面積は${getCircleArea(r).toFixed(1)}`);
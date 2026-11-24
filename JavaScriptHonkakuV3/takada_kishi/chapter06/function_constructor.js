// function命令による関数定義
function add1(x, y) {
  return x + y;
}


// const str = 'console.log(Math.pow(2, 3))';

// eval(str);
// Functionコンストラクタ経由

const add2 = new Function('x', 'y', 'return x + y;');
console.log(add2(10, 20));

const add3 = new Function('x,y', 'return x + y;');
console.log(add3(8, 12));

const args1 = 'base,height';

const formula1 = 'return base * height / 2;';
const formula2 = 'return Math.pow(base, height);'

const getTriangleArea1 = new Function(args1, formula1);
console.log(getTriangleArea1(8, 5));
const getTriangleArea2 = new Function(args1, formula2);
console.log(getTriangleArea2(10, 3));

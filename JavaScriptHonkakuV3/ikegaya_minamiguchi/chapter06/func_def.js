// (1) function命令
function add1(x, y) {
  return x + y;
}

// (2) Functionコンストラクタ経由
const param = 'x, y';
const body = 'return x + y;';
const add2 = new Function(param, body);

// (3) 関数リテラル(匿名関数、無名関数)
const add3 = function(x, y) {
  return x + y;
}

// (4) アロー関数
const add4 = (x, y) => x + y;

const a = 100;
const b = 200;

console.log(`${a} + ${b} = ${add1(a, b)}`);
console.log(`${a} + ${b} = ${add2(a, b)}`);
console.log(`${a} + ${b} = ${add3(a, b)}`);
console.log(`${a} + ${b} = ${add4(a, b)}`);
this.console.log(123);

const employeeName = '佐々木義男';
let age = 55;
var country = '日本';

console.log(`${employeeName}さんの年齢は${age}歳です。`);

function add(x, y) {
  return x + y;
}

console.log(add(100, 200));

/*
let, constで定義した変数はthis(window)では管理されない。
let や const で作ったグローバル変数は、概念としては
「見えないグローバルな枠組み（宣言的環境レコード）」で管理されています。
varで定義した変数はthis(window)で管理される
*/
console.dir(this);

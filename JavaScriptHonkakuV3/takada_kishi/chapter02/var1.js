// 変数(variable)
// 変数は宣言だけでもOK。あとから代入できる
let a;
a = 10;
console.log(Math.pow(a, 3));
a = 20;
console.log(Math.pow(a, 3));
a = -5;
console.log(Math.pow(a, 3));
console.log(typeof a);

a = 'ABC';
console.log(Math.pow(a, 3));
console.log(a);
console.log(typeof a);

/*
let a = true;
「SyntaxError: Identifier 'a' has already been declared」というエラーになる。
(Identifier---識別子)
要するに同じ変数名aが既に宣言されているからaという変数名をここでは宣言できないという意味。
/*
ES2015より前のJavaScriptではvarで変数宣言していた
*/

var name = '山田太郎';
console.log(name);

var name = 'Tシャツ ネイビー XL';
console.log(name);

let NAME = 'XPS8950';
console.log(NAME);

const price = 1000;
console.log(price);
/*
price = 2000;
console.log(price);
定数は再代入できない
「TypeError: Assignment to constant variable.」というエラーになる
*/

/*
const tax;
tax = 1.01;
定数は宣言と同時に値を代入しなければならない。
したがって、上記は
const tax = 1.01;
としなければならない。
*/

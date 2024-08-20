/*
JavaScriptは変数宣言で型の指定ができない言語
このような言語を動的型付け言語と呼ぶ
*/
let name = '山田太郎';
console.log(typeof name);
name = 123;
console.log(typeof name);
name = true;
console.log(typeof name);
name = [1, 2, 3];
console.log(typeof name);
console.log(name);

/*
C言語、JavaScriptは変数に型の制約を設けることができる
このような言語を静的型付け言語と呼ぶ。
int age = 23;
age = "ABC"; コンパイルエラーになる
*/
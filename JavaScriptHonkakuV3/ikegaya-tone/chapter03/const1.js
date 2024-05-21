/*
参照型の場合、アドレスの変更はできないが、
要素の追加・変更・削除は可能。
*/
const data = [1, 2, 4, 8, 16];
data[0] = 100;
data.push(32);
console.log(data);

/*
基本型は値を変更できない
TypeError: Assignment to constant variable.
という例外が発生する。
*/
const x = 100;
// x = 200;
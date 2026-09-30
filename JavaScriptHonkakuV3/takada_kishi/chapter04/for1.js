// for文,for of文,for in文 
/*
for (初期化式; 条件式; 増減式)
*/
for (let i = 5; i < 10; i++) {
  console.log(`iの値は${i}`);
}

console.log('--- 終了 ---');

/*
スコープ

ブロックスコープ

上記のfor文でも変数iを宣言しているが、
for文の中で宣言した変数は、for文を抜け出す時に
破棄されるので、再度、同じ変数名を宣言できる
*/

/*
 条件式はループを最終的に停止できるものであれば
 どんな条件式でも書ける
 (条件式を省略することもできる。for文を抜け出すために
 ブロック内でbreakを書く必要がある)
*/

for (let i = 5; i ** 2 <= 121; i++) {
  console.log(Math.sqrt(i));
}


for (let i = 10; i > 0; i--) {
  console.log(`${i}`);
}
console.log('Go!!');

// カウント変数に小数点を使用すると誤差が出るので回避すること
for (let i = 0; i <= 1; i += 0.01) {
  console.log(i);
}

// 回避策
for (let i = 0; i <= 100; i++) {
  console.log(i / 100);
}

let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(`1～100の合計: ${total}`);
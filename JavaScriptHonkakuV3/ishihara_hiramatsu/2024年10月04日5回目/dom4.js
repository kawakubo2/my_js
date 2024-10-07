/*
idセレクタ
HTMLファイルのid属性がPythonである要素を取得するには「#Python」と指定する。
もともとCSSで使用されているセレクタでJavaScriptでも要素を探し出すのに
使用される
document.querySelector('#Python'); ---> <p id="Python">xxxxxxxxxx</p>
*/
const elem1 = document.querySelector('#Python');
console.log(elem1.textContent); // 開始、終了タグの内容を取り出す方法
const elem2 = document.querySelector('#JavaScript');
console.log(elem2.textContent); // 開始、終了タグの内容を取り出す方法

/*
classセレクタ
class="fruit"の場合、classを俗世名、fruit"を属性値と呼ぶ
class属性がfruitの要素(複数あり)を取得するには「.fruit」と指定する。
document.querySelector('.fruit')と指定すれば最初の要素を
document.querySelectorAll('.fruit)と指定すれば全ての要素を配列として取得できる
*/
const fruits = document.querySelectorAll('.fruit');
for (const fruit of fruits) {
    console.log(fruit.textContent);
}
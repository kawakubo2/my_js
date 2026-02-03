/*
このスクリプトはコメントを説明するためのもので
業務では使用しない。
ES2015以降はvarを使わず、letやconstを使う。
*/
// 変数宣言はconstまたはletで行う
let name = "山田太郎"; // constは定数定義を表す

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ': ' + name.codePointAt(i));
}

let xxx = "ABC";

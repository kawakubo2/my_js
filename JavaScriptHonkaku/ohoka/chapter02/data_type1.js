let str1 = '私は山田です。';
let str2 = "私は田中です。";
let str3 = "私は中山です。";

let str4 = "He's teacher.";
console.log(str4);
let str5 = 'He is "GREAT" teacher';
console.log(str5);
let str6 = 'He\'s "GREAT" teacher';
console.log(str6);

/*
 JavaScriptの内部ではUnicodeが使用されている
*/
console.log("\u0B87");

let name = '山田太郎';
let age = 38;
let weight = 88;
let height = 180;

console.log(name + 'さんの年齢は' + age + '歳です。');

// テンプレート文字列
console.log(`${name}さんの年齢は${age}歳です。`);

console.log(`${name}さんのBMI値は${weight / (height / 100) ** 2}です。`);

let languages = ['JavaScript', 'Python', 'Go', 'Rust', 'C++', 'Erlang', 'Haskell'];
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
console.log(languages[3]);
console.log(languages[4]);
console.log(languages[5]);
console.log(languages[6]);
console.log('--- 通常for文による取り出し ---'); // 後で詳しい説明あり
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
console.log('--- for of 命令による取り出し:');  // 後で詳しい説明あり
for (let lang of languages) {
    console.log(lang);
}
// オブジェクトリテラル(形は連想配列だが用途により使い分ける)
let member = {name: '山田太郎', sex: '男', birthdate: '1950-12-04', email: 'tyamada@example.com'};
// { キー1: 値1, キー2: 値2, キー3: 値3}
// キーの重複は許さない。キーが重複した場合、後ろのキーの値が前の値を上書きする
let empleoyees = { E001: '山田', E002: '横山', E003: '田中'};
// ↑
// は一つのデータの塊でなく、キーと値が単調に紐づく形態となっている
// このような形のものを連想配列と呼ぶ。
// それに対し、memberはその単位が物事(オブジェクト)と結びついているので
// オブジェクトリテラルと呼ぶ

let obj = {x: 1, y: 2, z: 3, 123: 4};
// オブジェクト名.プロパティ名  
// ドット演算子のよる値の取得
console.log(obj.x); // 1
console.log(obj.y); // 2
console.log(obj.z); // 3
// 数値で始まるプロパティはドット演算子ではアクセスできない
// console.log(obj.123);
// このような場合はブラケット構文で値を取得する
console.log(obj['123']);
// もちろん、x, y, zもブラケット構文での呼び出しも可能

let n = 10;
// 数値に1加算するには
n = n + 1;
console.log(`n=${n}`);

n += 1; // n = n + 1と同義
console.log(`n=${n}`);

/*
 インクリメント演算子と呼ぶ。変数名の後ろに
 ++が付いたものを後置インクリメント、
 変数名の前に++が付いたものを前置インクリメントと呼ぶ
*/
n++; // 後置インクリメント
console.log(`n=${n}`);

++n; // 前置インクリメント
console.log(`n=${n}`);

// では今nは14です。以下を実行すると何が表示されるでしょうか？
// 実際実行して試してみましょう。
// 大内さん、値はいくらになりましたか？
// 岡部さんはどうでしょう？
// これは宿題としますね。
// 後置インクリメントと前置インクリメントの違いを次回までに調べておいてください。
console.log(n++);

let x = 0.2;
let y = 0.6;

if (x * 3 === y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
/*
 等しくならない理由は0.2という数値は2進数では表すことができたいため、
 一定の桁数を超えたところで計算を中止し、切上げ・切り捨て・四捨五入
 などの丸めをします。
*/
console.log(x * 3);

/*
 このような場合、両辺に10をかけて整数値にしてから比較すると
 等しくなります。
*/

if (x * 10 * 3 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
if (x * 3 * 10 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

/*
 x * 3で誤差が出たものに10をかけても誤差が大きくなるだけです。
 数学では10 * 3も3 * 10も同じになりますが、コンピュータの世界は
 違います。同じ演算子があるばあいどちらから計算するかは演算子に
 より異なります。*は左から結合するためx * 3とすると誤差が出ますが
 x * 10とすると小数点から整数になるためキチンと両辺が等しくなります。
 と言っても、今は小数点の桁数が目で見えているから10をかければすみました。
 小数点の桁数がわからない場合、どうしたらいいでしょうか？
 */

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

/*
許容できる誤差いないであれば等しいとみなすというやり方もあります。
*/

let w = 10;
w = w - 2;
w -= 2;
console.log(`期待値: 6, 検出値: ${w}`);
w = w * 3;
w *= 3;
console.log(`期待値: 54, 検出値: ${w}`);
w = w / 2;
w /= 3;
console.log(`期待値: 9, 検出値: ${w}`);
w %= 4;
console.log(`期待値: 1, 検出値: ${w}`);

// 基本型
let u = 1;
let v = u;
u = 2;
console.log(`u=${u}`);
console.log(`v=${v}`);

// 参照型
let data1 = [0, 1, 2];
let data2 = data1;
data1[0] = 5;
console.log(data2);

function nibai(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 2;
    }
}

let data3 = [3, 4, 5];
nibai(data3);
console.log(data3);

let n4 = 10;
function nibai2(n) {
    n *= 2;
}
nibai2(n4);
console.log(n4);










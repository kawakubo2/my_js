console.log('こんにちは、世界！');

let name = "山田太郎";
console.log(name + 'さん、こんにちは！');

name = "山田花子";
console.log(name + 'さん、こんにちは！');

const members = ["田中一郎", "山本久美子", "鈴木次郎", "星山裕子", "佐藤勝男"];
/*
members[x] --- xには、この場合0から4までの数値をしてできる
この数値のことを、インデックス(index)、または日本語で添え字と呼ぶ
*/
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);
console.log(members[3]);
console.log(members[4]);

console.log("配列の長さは" + members.length);

console.log('-----------------------')
for (const member of members) {
    console.log(member);
}
console.log('-----------------------')
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
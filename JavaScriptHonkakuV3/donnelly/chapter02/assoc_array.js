// 連想配列
const members = {
    A001: "山田太郎",
    A002: "横山花子",
    B001: "田中一郎",
    C001: "山本久美子",
    1001: "鈴木二郎"
};

// vim --- UNIX, Linux, Macでよく使用されるテキストエディタ

// 値の取得方法
// (1) ブラケット(bracket)構文
console.log(members['A001']);
// (2) ドット演算子
console.log(members.A001);
//console.log(members.1001);
console.log(members['1001']);


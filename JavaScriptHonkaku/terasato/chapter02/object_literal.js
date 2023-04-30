/*
 オブジェクトリテラル/連想配列
*/

// オブジェクトリテラル
let member = {
    name: '山田太郎',
    sex: '男',
    birth: '1950/12/04',
    email: 'tyamada@example.com'
};

console.log(`名前: ${member.name}`);
console.log(`性別: ${member.sex}`);
console.log(`生年月日: ${member.birth}`);
console.log(`Email: ${member.email}`);

// 連想配列
let employees = {
    '1001': '山田太郎',
    '1002': '横山花子',
    '1003': '田中一郎',
    '1004': '山本久美子'
};

/*
 連想配列・・・JavaScript、PHP
 辞書・・・・・Python、C#
 Map ・・・・・Java、JavaScript
 ハッシュ・・・Ruby
 */

// 関数リテラル(無名関数、匿名関数)
const add = function(x, y) {
    return x + y;
};

console.log(add(100, 180));
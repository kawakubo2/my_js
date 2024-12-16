/*
キー    値
社員番号 社員名
E1001   田中一郎
E1005   横山花子
E1007   山田太郎
E1013   佐藤勝男

Map
(1) キーを論理的に一定速度で検索できる(市販のPCでも100ns程度)
(2) キーは重複を許さない。同じキーで別の値を指定すると、別の値で上書きされる
(3) キーが存在しない場合、undefinedが返される
*/

const employees = new Map([
    ['E1001', '田中一郎'],
    ['E1005', '横山花子'],
    ['E1007', '山田太郎'],
    ['E1013', '佐藤勝男'],
    ['E1001', '星山裕子']
]);

console.log(employees.get('E1001'));
const name = employees['E1020'];
if (name) {
    console.log(name)
} else {
    console.log(`E1020は存在しません。`);
}
console.log(name ? name : 'E1020は存在しません');

console.log('--- キーだけ取り出す ---');
for (const no of employees.keys()) {
    console.log(no);
}
console.log('--- 値だけ取り出す ---');
for (const val of employees.values()) {
    console.log(val);
}
console.log('--- キーと値を同時に取り出す ---');
for (const [no, val] of employees.entries()) {
    console.log(`${no}: ${val}`);
}
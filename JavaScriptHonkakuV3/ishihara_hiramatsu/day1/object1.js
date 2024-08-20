// オブジェクトリテラル
const employee = {name: '山田', age: 43, weight: 70, height: 168};

console.log('for in命令は連想配列(オブジェクト)からkeyだけを取り出すのに特化した繰返し構文');
for (const key in employee) {
    console.log(key + ': ' + employee[key]);
}
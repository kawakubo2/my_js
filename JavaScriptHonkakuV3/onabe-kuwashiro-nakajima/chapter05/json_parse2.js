const data = `
{
    "members": [
        {"name": "山田太郎", "age": 38},
        {"name": "横山花子", "age": 27},
        {"name": "田中一郎", "age": 55},
        {"name": "星山裕子", "age": 34}
    ]
}
`;
console.log(typeof data);

// 文字列からオブジェクトへの変換
const obj = JSON.parse(data);
console.log(typeof obj);

for (const member of obj['members']) {
    console.log(`名前: ${member.name} 年齢: ${member.age}`);
}

// オブジェクトから文字列への変換
const str = JSON.stringify(obj);
console.log(typeof str);
console.log(str);
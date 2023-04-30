// string1.js

let s = "He's teacher";
console.log(s);

s = 'He is "GREAT" teacher';
console.log(s);

s = 'He\'s "GREAT" teacher';
console.log(s);

s = 'He\'s "GREAT"\n teacher';
console.log(s);

s = 'He\'s "GREAT"\t\t teacher';
console.log(s);

s = 'Machi Caf\u00E9';
console.log(s);

console.log("\u0986");

console.log("こんにちは ---> (ウィグル語) \u064a\u0627\u062e\u0634\u0649\u0645\u06c7\u0633\u0649\u0632")

console.log("テンプレート文字列");

let name = "山田太郎";
let height = 172;
let weight = 75;

console.log(`${name}さんのBMI値は${weight / (height /100) ** 2}です。`);
console.log(name + "さんのBMI値は" + (weight / (height / 100) ** 2) + "です。");

const data = ['JavaScript', 'Ajax', 'ASP.NET', 'PHP', 'XML'];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);
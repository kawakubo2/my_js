/*
for in
はオブジェクトや連想配列からキーを取り出すために使用する
他の目的では使用できない。
*/

// オブジェクトリテラル
console.log('--- オブジェクト ---');
const member = {
	first_name: '太郎',
	last_name: '山田',
	birth_date: '2000-12-31',
	weight: 80,
	height: 180
};

// オブジェクトからキーを取り出す
for (const key in member) {
  console.log(`${key}:${member[key]}`);
}

console.log('--- 連想配列 ---');
// 連想配列
const fruits = {
	apple: 100,
	orange: 150,
	grape: 200,
	banana: 80
};

for (const name in fruits) {
  console.log(`${name}:${fruits[name]}`);
}
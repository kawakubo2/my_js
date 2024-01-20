// 連想配列
const fruits = {apple: "リンゴ", orage: "オレンジ", strawberry: "イチゴ"};

console.log(fruits["apple"]);

for (const en_name in fruits) {
    console.log(fruits[en_name]);
}

// ES2015でMapが登場
// 連想配列をオブジェクトにしたものがMap
const map = new Map(
    [
        ["apple", "林檎"],
        ["orange", "オレンジ"]
    ]
);
// map['strawberry'] = '苺'; ×
map.set("strawberry", "苺"); // ○

console.log('---< entriesメソッド >---');
for (const [en_name, ja_name] of map.entries()) {
    console.log(`${en_name}: ${ja_name}`);
}
console.log('---< keysメソッド >---');
for (const en_name of map.keys()) {
    console.log(`${en_name}`);
}
console.log('---< valuesメソッド >---');
for (const ja_name of map.values()) {
    console.log(`${ja_name}`);
}
map.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
});
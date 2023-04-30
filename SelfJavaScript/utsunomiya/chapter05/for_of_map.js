const map = new Map();
map.set('apple', 'リンゴ');
map.set('banana', 'バナナ');

for (const item of map) {
    console.log(item[0], item[1]);
}

for (const [key, value] of map.entries()) {
    console.log(key, value);
}

for (const [key, value] of map) {
    console.log(key, value);
}

// キーを取り出す
for (let key of map.keys()) {
    console.log(key);
}
// 値だけを取り出す
for (let value of map.values()) {
    console.log(value);
}
// キーと値を取り出す
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
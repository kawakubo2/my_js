const m = new Map();
m.set('dog', 'ワンワン');
m.set('cat', 'ニャー');
m.set('mouse', 'チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.get('tiger'));
console.log(m.has('cat'));

for (let key of m.keys()) {
    console.log(key);
}
for (let value of m.values()) {
    console.log(value);
}
for (let [key, value] of m.entries()) {
    console.log(`${key}: ${value}`);
}

const map2 = new Map([['dog', '犬'], ['cat', '猫'], ['mouse', '鼠'], ['tiger', '虎'],
                    ['lion', 'ライオン'], ['deer', '鹿'], ['house', '馬'], ['sheep', '羊'],
                    ['monkey', '猿'], ['cow', '牛'], ['rhino', 'サイ']]);
console.log(map2);
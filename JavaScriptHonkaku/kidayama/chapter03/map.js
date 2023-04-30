const m = new Map();
m.set('dog', 'ワンワン');
m.set('cat', 'ニャー');
m.set('mouse', 'チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

for (const key of m.keys()) {
    console.log(key);
}

for (const value of m.values()) {
    console.log(value);
}

for (const [key, value] of m.entries()) {
    console.log(`${key}: ${value}`);
}


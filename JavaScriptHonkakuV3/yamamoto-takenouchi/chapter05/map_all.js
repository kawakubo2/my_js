const data = new Map();
data.set('1st', 'ファースト');
data.set('2nd', 'セカンド');
data.set('3rd', 'サード');

for (const key of data.keys()) {
    console.log(key);
}
for (const value of data.values()) {
    console.log(value);
}
for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
}
const data = new Map();

data.set('1st', 'ファースト')
    .set('2nd', 'セカンド')
    .set('3rd', 'サード');

for (const key of data.keys()) {
    console.log(key);
}

for (const value of data.values()) {
    console.log(value);
}

for (const [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
}

console.log(data.has('2nd'));
console.log(data.has('4th'));

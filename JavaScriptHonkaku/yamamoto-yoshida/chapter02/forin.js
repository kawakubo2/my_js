const data = { apple: 150, orange: 100, banana: 120 };
for (const key in data) {
    console.log(`${key}: ${data[key]}`);
}

const data2 = ['ABC', 'XYZ', '123'];
for (const key in data2) {
    console.log(`${key}: ${data2[key]}`);
}

for (const item of data2) {
    console.log(item);
}
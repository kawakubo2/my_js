const data = new Map();
data.set('壱', '1');
data.set('弐', '2');
data.set('参', '3');

for (const key of data.keys()) {
    console.log(key);
}
for (const value of data.values()) {
    console.log(value);
}
for (const [key, value] of data.entries()) {
    console.log(`${key}: ${value}`);
}

const array1 = Array.from(data.keys());
array1.push('肆');
const array2 = Array.from(data.values());
array2.push('4');

for (const e of array1) {
    console.log(e);
}
for (const e of array2) {
    console.log(e);
}


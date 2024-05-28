const data = ['apple', 'orange', 'banana'];


for (const fruit of data) {
    console.log(fruit);
}
console.log('---< ES2015より前の書き方 >---');
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}
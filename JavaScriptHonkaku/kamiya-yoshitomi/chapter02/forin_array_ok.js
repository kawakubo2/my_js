const data = ['apple', 'orange', 'banana'];

for (let i = 0, len = data.length; i < len; i++) {
    console.log(data[i]);
}

for (const d of data) {
    console.log(d);
}
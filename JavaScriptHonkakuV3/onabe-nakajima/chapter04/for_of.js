const data = [ 'apple', 'orange', 'banana'];
// 配列専用の繰り返し構文(連想配列では使えない)
for (const value of data) {
    console.log(value);
}
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}
const data = `{
"isbn": "978-4-297-12635-3",
"title": "TypeScript入門",
"price": "2948"
}`;

// ネットワークから受け取った時
const obj = JSON.parse(data);

console.log(obj);

console.log(obj.isbn);
console.log(obj['isbn']);

// ネットワークに送るとき
const str = JSON.stringify(obj);
console.log(typeof str);
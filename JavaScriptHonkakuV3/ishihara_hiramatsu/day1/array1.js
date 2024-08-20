const names = ['山田', '横山', '田中', '佐々木', '鈴木', '星山', '佐藤'];

console.log('ES2015より前の書き方(今でも使う場面はある');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log('ES2015以降はfor of命令が使える');
for (const name of names) { // nameを仮変数と呼び、開発者が自由に変数名を付けることができる
    console.log(name);
}
let s1 = '192.168.1.24';

console.log(s1 = s1.substring(s1.indexOf('.')));
console.log(s1 = s1.substring(s1.indexOf('.') + 1));

let a1 = s1.split('.');
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);
console.log(a1[3]);

let url = 'https://haru-idea.jp';
console.log(`${url}は暗号化通信してい${url.starsWith("https") ? "る": "ない"}`);

let files = ['abs.java', 'xyz.py', 'aaa.js', 'bbb.js', 'lmm.py', 'ccc.js'];
console.log('JavaScriptのソースファイル');
for (let file of files) {
    if (file.endsWith('.js')) {
        console.log(file);
    }
}
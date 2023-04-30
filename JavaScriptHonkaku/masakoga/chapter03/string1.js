let s1 = '192.168.1.24';

console.log(s1.substring(0, s1.indexOf('.')));
console.log(s1.substring(s1.lastIndexOf('.') + 1));

let a1 = s1.split('.');
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);
console.log(a1[3]);

let url1 = 'https://haru-idea.jp';
console.log(`${url1}は暗号化通信してい${url1.startsWith("https") ? "る": "ない"}`);

let files = ['abc.java', 'xyz.py', 'aaa.js', 'bbb.js', 'lmn.py', 'ccc.js'];
console.log('JavaScriptのソースファイル');
for (let file of files) {
    if (file.endsWith('.js')) {
        console.log(file);
    }
}

let name = '川久保智晴';

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ' の文字コードは ' + name.charCodeAt(i));
}

let s2 = '      abc         ';
console.log('>' + s2.trim() + '<');

console.log('�る�'.length);
console.log('叱る'.length)
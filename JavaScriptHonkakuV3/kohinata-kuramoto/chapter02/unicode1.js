/*
このスクリプトはコメントを説明するためのもので
業務では使用しない。
ES2015以降はvarを使わず、letやconstを使う。
*/
// 変数宣言はconstまたはletで行う
let name = "山田太郎"; // constは定数定義を表す
let age = 38;

// pythonのF文字列に似ている。print(f"{name}産の年齢は{age}歳です。");
console.log(`${name}さんの年齢は${age}歳です。`);

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ': ' + name.codePointAt(i));
}

let xxx = "ABC";

const abc = 123;

let price = 1000;

const CONSUMPTION_TAX = 0.03;
let a = Math.floor(price * CONSUMPTION_TAX);

if (0) {
	console.log('a');
} else {
	console.log('b');
}

console.log('Machi Caf\u00E9');

console.log('\u0d86\u0dba\u0dd4\u0db6\u0ddd\u0dc0\u0db1\u0dca');

console.log('山田太郎さんの\t年齢は\n35歳です。');

let data = [
    'JavaScript', 
    'Python', 
    'PHP', 
    'Ruby', 
    'Perl',
    'Java',
];
console.log(data.length);

const rec = {
    width: 10,
    height: 20,
    position: {
        x: 12.3,
        y: -4.5
    }
};

const book = {
    title: 'JavaScript入門',
    publisher: '講談社',
    authors: [
        { name: '鈴木', addreess: '東京'},   
        { name: '佐藤', addreess: '東京'},   
        { name: '田中', addreess: '大阪'},   
    ]
};
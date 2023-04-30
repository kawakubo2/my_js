for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

// 連想配列
let fruits = {banana: 100, orange: 300, grape: 250, apple: 150};
for(let name in fruits) {
    console.log(name + ':' + fruits[name]);
}
// オブジェクトリテラル
let employee = {name: '山田太郎', birthdate: '1992-08-05', email: 'taro@yamada.com'};
for (let key in employee) {
    console.log(key + ':' + employee[key]);
}

/*
 連想配列・・・・JavaScript, PHP
 辞書・・・・・・Python, C#
 Map ・・・・・・Java, JavaScript
 ハッシュ・・・・Ruby
*/

/*
普通の配列ではfor in命令はあまり使わない
*/
let array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let key in array1) {
    console.log(key + ':' + array1[key]);
}
/*
 普通の配列はfor of命令を使う
*/
for (let v of array1) {
    console.log(v)
}

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

let result = 0;
let i;
for(i = 1; i <= 100; i++) {
    result += i;
    if (result > 1000) {
        break;
    }
}
console.log('合計値が1000を超えるのは' + i);


const fruits = ['バナナ', '林檎', 'ブトウ', '苺'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/*
for of 命令は普通の配列から順に取り出す場合に特化した繰返し構文
*/
console.log('-------------');
for (const fruit of fruits) {
    console.log(fruit);
}
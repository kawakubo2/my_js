const arry = [10, 20, 23, 47];

let total1 = 0;
for (let i = 0; i < arry.length; i++) {
    total1 += arry[i];
}
console.log(`合計: ${total1}`);

let total2 = 0;
/*
for (let num of arry) {
    
}
arry配列の先頭から順番に要素を取り出す、変数numに格納してくれる
*/
for (let num of arry) {
    total2 += num;
}
console.log(`合計: ${total2}`);
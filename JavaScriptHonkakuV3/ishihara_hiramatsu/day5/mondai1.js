const numbers = [10, -4, -5, 3, 4, 9, 8, -6, 7, 5, 1, 2, 6];

/*
問1
配列から要素を取り出しコンソールに表示する
*/
console.log('--- 問1 ---');
for (const num of numbers) {
    console.log(num);
}
/*
問2
配列からプラスの数値だけを取り出しコンソールに表示する
*/
console.log('--- 問2 ---');
for (const num of numbers) {
    if (num > 0) {
        console.log(num);
    }
}
/*
問3
配列の数値の合計を求める
*/
console.log('--- 問3 ---');
let total = 0;
for (const num of numbers) {
    total += num; // total = total + num
}
console.log(total);
/* 
問4
配列のプラスの数値の合計を求める
*/
console.log('--- 問4 ---');
total = 0;
for (const num of numbers) {
    if (num > 0) {
        total += num; // total = total + num
    }
}
console.log(total);
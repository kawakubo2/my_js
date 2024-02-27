const name = '山田太郎';
const age = 38;
console.log(name + 'さんは、' + age + '歳です。');
console.log(`${name}の年齢は${age}歳です。${age * 100}`); 

let x = 10;
x = x + 1;
console.log(`x=${x}`);
x += 1; // x = x + 1;
console.log(`x=${x}`);
console.log(`x=${++x}`);
console.log(`x=${x++}`);
console.log(`x=${x}`);

/*
前置インクリメント ---> 1増えたのち処理が行われる
後置インクリメント ---> 全ての処理が終わったのちに1増える(ある例外を除いては)
*/

let w = 10;
const z = w++ * w++;
console.log(`z=${z}`);
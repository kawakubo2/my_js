/*
Arrayオブジェクト
*/
const fruits = ['banana', 'apple', 'orange', 'grape', 'pear', 'watermelon',
                 'prune', 'walnut', 'cherry', 'chestnut'];

/*
fruitsの中から文字数が6文字以上のfruitsが格納された配列を生成する
*/
const newFruits = [];
for (const fruit of fruits) {
    if (fruit.length >= 6) {
        newFruits.push(fruit);
    }
}
console.log(newFruits);

/*
配列のfruitの内、その文字列に'a'と'e'の文字が含まれるものだけ
を格納した新しい配列を配列を作る
*/
const newFruits2 = [];
for (const fruit of fruits) {
    if (fruit.includes('a') && fruit.includes('e')) {
        newFruits2.push(fruit);
    }
}
console.log(newFruits2);

const newFruits3 = fruits.filter(f => f.includes('a') && f.includes('e'));
console.log(newFruits3);
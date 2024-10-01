/*
Arrayオブジェクト
*/
const fruits1 = ['banana', 'apple', 'orange', 'grape', 'pear'];
/*
orangeとgrapeを削除する
*/
const removed_fruits = fruits1.splice(2, 2);
console.log(`削除されたfruits: ${removed_fruits.toString()}`);
console.log(`残ったfruits: ${fruits1.toString()}`);

const fruits2 = ['banana', 'apple', 'orange', 'grape', 'pear'];
/*
orangeとgrapeを削除して、削除した場所にprune, walnut, cherryを追加
*/
const removed_fruits2 = fruits2.splice(2, 2, 'prune', 'walnut', 'cherry');
console.log(`削除されたfruits: ${removed_fruits2.toString()}`);
console.log(`残ったfruits: ${fruits2.toString()}`);
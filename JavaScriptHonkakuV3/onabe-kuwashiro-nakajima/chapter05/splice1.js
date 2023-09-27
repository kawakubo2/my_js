console.log('===< 削除メソッド >===');
const a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前: ${a1.toString()}`);
console.log('d1 = a1.splice(2, 3)');
const d1 = a1.splice(2, 3); // 2番目から3個分削除し、削除したものを配列として返す。
console.log(`削除した要素: ${d1.toString()}`);
console.log(`操作後: ${a1.toString()}`);

console.log('===< 置換メソッド >===');
const a2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前: ${a2.toString()}`);
console.log("d1 = a2.splice(2, 3, 'X', 'Y')");
// 2番目から3個分削除し、その削除した場所にXとYを挿入する。削除したものを配列として返す。
const d2 = a2.splice(2, 3, 'X', 'Y'); 
console.log(`削除した要素: ${d2.toString()}`);
console.log(`操作後: ${a2.toString()}`);

console.log('===< 挿入メソッド >===');
const a4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`操作前: ${a4.toString()}`);
console.log("d1 = a4.splice(2, 3, 'X', 'Y')");
// 2番目から3個分削除し、その削除した場所にXとYを挿入する。削除したものを配列として返す。
const d4 = a4.splice(2, 0, 'X', 'Y'); 
console.log(`削除した要素: ${d4.toString()}`);
console.log(`操作後: ${a4.toString()}`);
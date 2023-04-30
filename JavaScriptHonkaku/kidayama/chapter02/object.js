/*
 オブジェクトリテラル
 {キー1: 値1, キー2: 値2, ......}
*/
const obj = {x: 1, y: 2, z:3, 4: 'abc'};


console.log(obj.x); // ドット演算子
console.log(obj['x']); // ブラケット構文

// console.log(obj.4); キーが数値の場合、ドット演算子は使用できない
console.log(obj['4']);


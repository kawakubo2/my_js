let a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

console.log('---< slice(非破壊的メソッド) >---');
let a2 = a1.slice(2, 5);
console.log('a1=' + a1.toString());
console.log('let a2 = a1.slice(2, 5)');
console.log('a1=' + a1.toString());
console.log('a2=' + a2.toString());

console.log('---< splice(破壊的メソッド) >---');
console.log('a1=' + a1.toString());
console.log('==< 削除 >==');
let a3 = a1.splice(2, 3);
console.log('a3 = a1.splice(2, 3)');
console.log('a3=' + a3.toString());
console.log('a1=' + a1.toString());

a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log('a1=' + a1.toString());
console.log('==< 置換 >==');
let a4 = a1.splice(2, 3, 'x', 'y');
console.log('let a4 = a1.splice(2, 3, "x", "y")');
console.log('a4=' + a4.toString());
console.log('a1=' + a1.toString());

a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log('a1=' + a1.toString());
console.log('==< 挿入 >==');
let a5 = a1.splice(2, 0, 'x', 'y');
console.log('let a5 = a1.splice(2, 0, "x", "y")');
console.log('a5=' + a5.toString());
console.log('a1=' + a1.toString());

console.log('---< ofメソッド(静的) >---');
let a6 = Array.of('い', 'は', 'に', 'ほ', 'へ');
console.log("let a6 = Array.of('い', 'は', 'に', 'ほ', 'へ')");
console.log('a6は配列で' + (Array.isArray(a6) ? 'ある': 'はない'));

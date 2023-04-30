let a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log('a1=' + a1.toString());
console.log("a1.indexOf('d') ---> " + a1.indexOf('d'));
let a2 = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'];
console.log('a2=' + a2.toString());
console.log("a2.lastIndexOf('b') ---> " + a2.lastIndexOf('b'));
console.log("a2.indexOf('x') ---> " + a2.indexOf('x'));

console.log('---< concat(非破壊的メソッド) >---');
let lang1 = ['PHP', 'JavaScript', 'Java', 'C'];
let lang2 = ['Python', 'Perl', 'Rust', 'Go'];
console.log('lang1=' + lang1.toString());
console.log('lang2=' + lang2.toString());
let lang3 = lang1.concat(lang2);
console.log('let lang3 = lang1.concat(lang2)')
console.log('lang1=' + lang1.toString());
console.log('lang2=' + lang2.toString());
console.log('lang3=' + lang3.toString());

console.log('---< joinメソッド(非破壊的) >---');
let str1 = lang1.join('-');
console.log("let str1 = lang1.join('-')");
console.log('str1=' + str1);
console.log('lang1=' + lang1.toString());

console.log('---< sliceメソッド(非破壊的) >---');
console.log('a1=' + a1.toString());
let a3 = a1.slice(0, 3);
let a4 = a1.slice(3, 6);
let a5 = a1.slice(6);
console.log('a1=' + a1.toString());
console.log('a3=' + a3.toString());
console.log('a4=' + a4.toString());
console.log('a5=' + a5.toString());

console.log('---< splice(破壊的) >---');
console.log('a1=' + a1.toString());
console.log('===[ 削除 ]===');
let a6 = a1.splice(2, 3);
console.log('let a6 = a1.splice(2, 3)');
console.log('a6=' + a6.toString());
console.log('a1=' + a1.toString());

a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log('===[ 置換え ]===');
console.log('a1=' + a1.toString());
let a7 = a1.splice(2, 3, 'x', 'y');
console.log('a7=' + a7.toString());
console.log('a1=' + a1.toString());

a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log('===[ 挿入 ]===');
console.log('a1=' + a1.toString());
let a8 = a1.splice(2, 0, 'x', 'y');
console.log('a8=' + a8.toString());
console.log('a1=' + a1.toString());

console.log('---< Array.of(静的) >---');
let a9 = Array.of('white', 'Blue', 'Pink', 'Yellow', 'Red');
console.log("let a9 = Array.of('white', 'Blue', 'Pink', 'Yellow', 'Red'")
console.log('a9=' + a9.toString());
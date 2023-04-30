let ary1 = ['a', 'b', 'c', 'd', 'e'];
let ary2 = ['x', 'y', 'z'];

console.log('---< concat(非破壊的) >---');
console.log('操作前');
console.log(ary1.toString());
console.log(ary2.toString());
let ary3 = ary1.concat(ary2);
console.log('let ary3 = ary1.concat(ary2) ---> ' + ary3.toString());
console.log('操作後');
console.log(ary1.toString());
console.log(ary2.toString());

console.log('---< slice(非破壊的) >---');
console.log('操作前');
console.log(ary1.toString());
let ary4 = ary1.slice(1, 3); // 1～(3-1)までの配列を返す
console.log('let ary4 = ary1.slice(1, 3) ---> ' + ary4.toString());
console.log('操作後');
console.log(ary1.toString());

console.log('---< splice(破壊的) >---');
console.log('--削除関数--')
console.log('操作前');
console.log(ary1.toString());
let ary5 = ary1.splice(1, 2); // 1番目から2個削除
console.log('let ary5 = ary1.splice(1, 2) ---> ' + ary5.toString());
console.log('操作後');
console.log(ary1.toString());

console.log('--置換関数-- 置換前と置換後の要素数は一致しなくてもよい')
ary1 = ['a', 'b', 'c', 'd', 'e'];
console.log('操作前');
console.log(ary1.toString());
let ary6 = ary1.splice(1, 2, 'l', 'm', 'n');
console.log("let ary6 = ary1.splice(1, 2, 'l', 'm', 'n') ---> " + ary6.toString());
console.log('操作後');
console.log(ary1.toString());

console.log('--挿入関数--');
ary1 = ['a', 'b', 'c', 'd', 'e'];
console.log('操作前');
console.log(ary1.toString());
let ary7 = ary1.splice(1, 0, 'l', 'm', 'n');
console.log("let ary7 = ary1.splice(1, 0, 'l', 'm', 'n') ---> " + ary7.toString());
console.log('操作後');
console.log(ary1.toString());




const data_ary = ['one', 'two', 'three'];

const itr = data_ary[Symbol.iterator]();
console.log('--- イテレータによる取り出し ---');
while(d = itr.next()) {
    if (d.done) break;
    console.log(d.done);
    console.log(d.value);
}
console.log('--- for of による取り出し ---');
// シンタックス・シュガー(糖衣構文)
for (const e of data_ary) {
    console.log(e);
}
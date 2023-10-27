const data_array = ['one', 'two', 'three'];

console.log('for of 命令を使用');
/*
for of命令はiteratorのSyntax Sugar(糖衣構文)
*/
for (const data of data_array) {
    console.log(data);
}

console.log('iteratorを使用')
let itr = data_array[Symbol.iterator]();
let d;
while(d = itr.next()) {
    if (d.done) break;
    console.log(d.done);
    console.log(d.value);
}
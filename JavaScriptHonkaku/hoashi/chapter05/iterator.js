const data_ary = ['one', 'two', 'three'];

const itr = data_ary[Symbol.iterator]();
let d;
while (d = itr.next()) {
    if (d.done) break;
    console.log(d.value);
}

// 糖衣構文(Syntax Sugar)
for (const d of data_ary) {
    console.log(d);
}
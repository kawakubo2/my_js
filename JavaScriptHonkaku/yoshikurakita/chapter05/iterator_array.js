let data_ary = ['One', 'Two', 'Three'];

let itr = data_ary[Symbol.iterator]();
/*
let d;
while (d = itr.next()) {
    if (d.done) break;
    console.log(d.done);
    console.log(d.value);
}
*/
for (let n of data_ary) {
    console.log(n);
}
/*
for (let i = 0; i < data_ary.length; i++) {
    console.log(data_ary[i]);
}
*/
const data_ary = ['One', 'Two', 'Three'];

const itr = data_ary[Symbol.iterator]();

let d;
while (d = itr.next()) {
    if (d.done) break;
    console.log(d.done);
    console.log(d.value);
}
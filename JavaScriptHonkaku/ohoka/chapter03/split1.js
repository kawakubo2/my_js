let p = /[\/\.\-]/gi;
let str = ['2021-10-15', '2021/10/16', '2021.10.16'];
for (let s of str) {
    console.log(s.split(p).map(d => Number.parseInt(d)));
}
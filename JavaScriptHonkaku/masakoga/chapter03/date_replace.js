let dates = ['2021/07/27', '2021-07-27', '2021.07.27', '2021,07,27', '2021@07@27'];
let p = /(\d{4}).(\d{1,2}).(\d{1,2})/
let n2d = [];
for (let d of dates) {
    n2d.push(d.replace(p, '$1,$2,$3').split(',').map(n => Number.parseInt(n)));
}
console.log(n2d);
let members = [
    'Yamada,1988-12-25,38@Osaka', 
    'Yokoyama,1992-03-15,24@Kyoto',
    'Tanaka,1972-08-03,49@Fukuoka'
];
let p = /([a-zA-Z]+),(\d{4}-\d{1,2}-\d{1,2}),(\d{1,3})@([a-zA-Z]+)/;

let sw = 2;
let s1 = '$1\t$3\t$4\t$2';
let s2 = '$1,$3,$4,$2';
for (let member of members) {
    let rep = (sw == 1) ? s1 : s2; 
    console.log(member.replace(p, rep));
}

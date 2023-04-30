let members = [
    "Taro Yamada,1989-09-22,170,68",
    "Hanako Yokoyama,1998-12-25,160,58",
    "Ichiro Tanaka,1972-04-21,178,88",
];

/*
名前,生年月日,身長,体重
体重,身長,名前,生年月日
*/

// let p = /^([a-z]+ [a-z]+),(\d{4}-\d{1,2}-\d{1,2}),(\d{1,3}),(\d{1,3})$/i;
let p = new RegExp('^([a-z]+ [a-z]+),(\\d{4}-\\d{1,2}-\\d{1,2}),(\\d{1,3}),(\\d{1,3})$', 'i');


let result = [];
for (let member of members) {
    console.log(p.test(member));
    result.push(member.replace(p, "$4,$3,$1,$2"));
} 
console.log(result);
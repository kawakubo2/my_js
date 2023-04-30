/*
名前,生年月日,身長,体重 ---> 身長,体重,名前,生年月日
*/
let members = [
    "Taro Yamada,1990-02-15,172,70",
    "Hanako Yokoyama,1998-10-28,158,50",
    "Ichiro Tanaka,1975-03-11,168,70",
    "Kumiko Yamamoto,1985-07-07,160,53"
];

let p = /([a-z]+ [a-z]+),([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}),([0-9]{2,3}),([0-9]{2,3})/i;
for (let member of members) {
    let result = member.replace(p, "$3,$4,$1,$2");
    console.log(result);
}
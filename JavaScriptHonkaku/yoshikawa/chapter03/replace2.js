const members = [
    "Taro Yamada,70,168,42,Osaka",
    "Hanako Yokoyama,58,162,48,Nagoya",
    "Ichiro Tanaka,80,180,55,Tokyo",
    "Kumiko Yamamoto,62,170,39,Fukuoka"
];

// 名前,体重,身長,年齢,都道府県名 ---> 都道府県名,名前,年齢
const p = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{1,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(p, "$5,$1,$4"));
}
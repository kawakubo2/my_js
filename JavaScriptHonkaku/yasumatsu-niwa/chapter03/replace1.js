const members = [
    "Taro Yamada,38,72,168,Tokyo",
    "Hanako Yokoyama,42,60,162,Chiba",
    "Ichiro Tanaka,52,82,180,Fukuoka",
    "Kumiko Yamamoto,28,58,158,Osaka"
];

// "名前,年齢,体重,身長,都道府県名" -> "都道府県名,名前,身長,体重"
const pattern = /^([a-z]+ [a-z]+),(\d{1,3}),(\d{2,3}),(\d{2,3}),([a-z]+)$/i;
const regexp = new RegExp(pattern);
for (const member of members) {
    console.log(member.replace(regexp, '$5,$1,$4,$3'));
}
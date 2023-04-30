const members = [
    "Taro Yamada,72,168,38,Osaka",
    "Hanako Yokoyama,58,162,27,Nagoya",
    "Ichiro Tanaka,80,180,55,Tokyo",
    "Kumiko Yamamoto,62,170,34,Fukuoka"
];

// "名前,体重,身長,年齢,都道府県名" -> "都道府県名,名前,年齢"

const pattern = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{1,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(pattern, '$5,$1,$4'));
}
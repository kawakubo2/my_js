const members = [
    "Taro Yamada,38,172,80,Tokyo",
    "Hanako Yokoyama,42,158,55,Nagoya",
    "Ichiro Tanaka,55,180,77,Osaka",
    "Kumiko Yamamoto,35,162,58,Fukuoka"
];
/*
    "Taro Yamada,38,172,80,Tokyo"
        ↓
    "Tokyo,Taro Yamada,38"
*/

const pattern = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{2,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(pattern, '$5,$1,$2'));
}
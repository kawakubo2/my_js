const members = [
    "Taro Yamada,38,172,85,Fukuoka",
    "Hanako Yokoyama,28,158,52,Tokyo",
    "Ichiro Tanaka,55,180,83,Yokohama",
    "Kumiko Yamamoto,33,162,58,Osaka",
];

const pattern = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{2,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(pattern, '$5,$1,$2'))
}
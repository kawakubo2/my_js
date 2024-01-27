const members = [
    "Taro Yamada,34,172,78,Osaka",
    "Hanko Yokoyama,43,163,60,Yokohama",
    "Ichiro Tanaka,55,179,78,Tokyo",
    "Kumiko Yamamoto,28,158,53,Fukuoka"
];

const pattern = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{2,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(pattern, '$5\t$1\t$2'));
}
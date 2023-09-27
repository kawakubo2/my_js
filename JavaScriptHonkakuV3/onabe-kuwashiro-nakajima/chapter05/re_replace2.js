const members = [
    'Taro Yamada,35,170,76,Tokyo',
    'Hanako Yokoyama,47,158,59,Nagoya',
    'Ichiro Tanaka,55,178,83,Fukuoka'
];

const re = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{2,3}),(\d{1,3}),([a-z]+)$/i;

for (const member of members) {
    console.log(member.replace(re, '$5,$1,$2'));
}
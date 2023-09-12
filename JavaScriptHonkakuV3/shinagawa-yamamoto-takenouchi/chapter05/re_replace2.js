const members = [
    'Taro Yamada,35,168,78,Tokyo',
    'Hanako Yokoyama,48,157,58,Osaka',
    'Ichiro Tanaka,55,82,180,Nagoya',
    'Kumiko Yamamoto,31,168,62,Fukuoka'
];

const re_member = /^([a-z]+ [a-z]+),(\d{2,3}),(\d{1,3}),(\d{1,3}),([a-z]+)$/i;
for (const member of members) {
    console.log(member.replace(re_member, '$5,$1,$2'));
}



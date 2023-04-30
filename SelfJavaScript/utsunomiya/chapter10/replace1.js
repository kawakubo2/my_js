let members = [
    "Taro Yamada,38,67,170",
    "Hanako Yokoyama,27,55,160",
    "Ichiro Tanaka,55,82,180",
    "Kumiko Yamamoto,35,58,162"
];

const pattern = /([a-z]+ [a-z]+),(\d+),(\d+),(\d+)/gi;

for (const member of members) {
    console.log(member.replace(pattern, "$3,$4,$1,$2"));
}
const members = [
    "Taro Yamada,35,70,168",
    "Hanako Yokoyama,42,55,156",
    "Ichiro Tanaka,55,80,178"
];

const pattern = /^([a-z]+ [a-z]+),(\d+),(\d+),(\d+)$/i;

for (let member of members) {
    console.log(member.replace(pattern, '$3,$4,$1,$2'));
}
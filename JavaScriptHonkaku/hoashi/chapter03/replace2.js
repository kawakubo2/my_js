const members = [
    "Taro Yamada,45,172,85,Nagoya",
    "Hanako Yokoyama,28,158,51,Osaka",
    "Ichiro Tanaka,55,181,85,Tokyo"
];

const p = /([a-z]+ [a-z]+),(\d{1,3}),(\d{2,3}),(\d{2,3}),([a-z]+)/i
for (const m of members) {
    console.log(m.replace(p, "$5,$1,$2"));
}
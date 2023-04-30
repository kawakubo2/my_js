const members = [
    /* 名前,住所,年齢,体重,身長 */
    "Taro Yamada,Yokohama,28,58,160",
    "Ichiro Tanaka,Nagoya,52,72,179",
    "Jiro Suzuki,Hiroshima,38,78,175"
];

const p = /([a-z]+ [a-z]+),([a-z]+),(\d{1,3}),(\d{2,3}),(\d{2,3})/i;
for (const member of members) {
    console.log(member.replace(p, '$4,$5,$1,$3'));
}
const tel_pattern = /^(\d{2,4})-(\d{2,4})-(\d{2,4})$/;
const tels = [
    '03-3700-0000', '045-777-8888', '092-999-8888'
]
for (const tel of tels) {
    const result = tel.match(tel_pattern);
    console.log(`---< ${result[0]} >---`)
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}

console.log('string#match(gオプションなし)');
const str = "私の自宅の固定番号は092-222-9999、弟の固定番号は03-0000-0000、実家は092-333-8888です。";
const tel_pattern2 = /^(\d{2,4})-(\d{2,4})-(\d{2,4})$/;
for (const tel of tels) {
    const result2 = tel.match(tel_pattern2);
    console.log(`---< ${result2[0]} >---`)
    console.log(`市外局番: ${result2[1]}`);
    console.log(`市内局番: ${result2[2]}`);
    console.log(`加入者番号: ${result2[3]}`);
}
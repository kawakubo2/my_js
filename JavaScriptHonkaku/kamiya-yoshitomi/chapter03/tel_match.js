// tel_match.js
const s = "私の実家の固定番号は092-292-8888で、会社の代表番号は03-3721-9999です。";

const regexp = new RegExp("(\\d{2,4})-(\\d{2,4})-(\\d{4})", "g");

const result = s.match(regexp);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
let r;
while ((r = regexp.exec(s)) != null) {
    console.log('--------------------');
    console.log(r[0]);
    console.log(`市外局番: ${r[1]}`);
    console.log(`市内局番: ${r[2]}`);
    console.log(`加入者番号: ${r[3]}`);
}
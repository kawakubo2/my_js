const type = ['NFD', 'NFC', 'NFKD', 'NFKC'];
const list = ['ギガ', 'キ゛カ゛', 'ｷﾞｶﾞ', '㌐'];
for (const t of type) {
    console.log(`■${t}`);
    for (const l of list) {
        console.log(`${l} => ${l.normalize(t)}`);
    }
}

const s1 = "ｷﾞｶﾞ";
for (let i = 0; i < s1.length; i++) {
    console.log(`${s1.charAt(i)} の文字コードは ${s1.codePointAt(i)}`);
}

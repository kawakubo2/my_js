const type = 'NFKC';

const list = ['ギガ', 'キ゛カ゛', 'ｷﾞｶﾞ', '㌐']
for (const li of list) {
    console.log(li.normalize(type));
}
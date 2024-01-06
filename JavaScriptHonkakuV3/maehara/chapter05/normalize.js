const kana = ["ギガ","ギ゛カ゛", "ｷﾞｶﾞ", "㌐"];

for (const k of kana) {
    console.log(`${k} ---> ${k.normalize('NFKC')}`);
}
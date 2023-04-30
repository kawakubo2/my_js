let s = '123-4567は実家の郵便番号です。現在の郵便番号は812-0015です。090-9999-9999は私の携帯の番号。会社の番号は092-000-0000。引っ越し先の郵便番号は987-6543';
let pattern = /^(\d{3}-\d{4})[^\d-]|[^\d-](\d{3}-\d{4})[^\d-]|[^\d-](\d{3}-\d{4})$/g;

while ((result = pattern.exec(s)) !== null) {
    if (result[1]) console.log(result[1]);
    if (result[2]) console.log(result[2]);
    if (result[3]) console.log(result[3]);
}



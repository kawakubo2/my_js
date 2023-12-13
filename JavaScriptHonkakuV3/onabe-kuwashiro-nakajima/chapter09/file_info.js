document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#file')
    input.addEventListener('change', () => {
        const files = input.files;
        for (const file of files) {
            console.log(`
                ファイル名: ${file.name}
                種類: ${file.type}
                サイズ: ${getSizeWithUnitName(file.size)}
                最終更新日: ${new Date(file.lastModified)}
            `);
        }
    });
});

/*
引数:
    value: 正の整数値
    prec: 小数点の精度
            例) 2と指定すると小数点第3位を四捨五入して小数点第2位まで求める
*/
function myround(value, prec) {
   return Math.round(value * Math.pow(10, prec)) / Math.pow(10, prec);
}
/*
2345678901
*/
function getSizeWithUnitName(size) {
    const unit_names = ['', 'K', 'M', 'G', 'T', 'P', 'Y'];
    let index = 0;
    while (size / 1024 >= 1) {
        index++;
        size /= 1024;
    }
    return myround(size, 2) + unit_names[index] + 'B';
}

/*
月を引数として取り、季節名を返す関数
12, 1, 2 ---> 冬
3, 4, 5 ----> 春
6, 7, 8 ----> 夏
9, 10, 11 --> 秋
上記以外  ---> 1～12を入力してください。
*/
 
function getSeasonName(month) {
    let season = '';
    if (month === 12 || month === 1 || month === 2) {
        season = '冬';
    } else if (month >= 3 && month <= 5) {
        season = '春';
    } else if (month >= 6 && month <= 8) {
        season = '夏';
    } else if (month >= 9 && month <= 11) {
        season = '秋';
    } else {
        season = '1～12を入力してください';
    }
    return season;
}

for (let month = 0; month <= 13; month++) {
    console.log(`${month}: ${getSeasonName(month)}`);
}
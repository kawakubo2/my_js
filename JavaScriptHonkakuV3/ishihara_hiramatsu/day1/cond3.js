const item = 'H';

switch(item) {
    case 'H':
        console.log('ハート');
        break;
    case 'D':
        console.log('ダイヤ');
        break;
    case 'S':
        console.log('スペード');
        break;
    case 'C':
        console.log('クラブ');
        break;
    default:
        console.log('不明');
        break;
}

/*
CASE item
    WHEN 'H' THEN 'ハート'
    WHEN 'D' THEN 'ダイヤ'
    WHEN 'S' THEN 'スペード'
    WHEN 'C' WHEN 'クラブ';
    ELSE '不明'
END AS SUIT
*/

let riquor = 'ビール';

switch(riquor) {
    case 'ウィスキー':
    case 'ウォッカ':
    case '焼酎':
        console.log('蒸留酒です。');
        break;
    case 'ワイン':
    case 'ビール':
    case '日本酒':
        console.log('醸造酒です。');
        break;
    default:
        console.log('不明');
        break;
}
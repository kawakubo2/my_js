let drink = 2;

switch (drink) {
    case 1:
        console.log('コーヒーは400円です。');
        break;
    case 2:
        console.log('オレンジジュースは350円です。');
        break;
    case 3:
        console.log('ミルクは300円です。');
        break;
}

let liquor = '焼酎';
switch (liquor) {
    case 'ウィスキー':
    case '焼酎':
    case 'ブランデー':
        console.log('蒸留酒です。');
        break;
    case 'ビール':
    case '日本酒':
        console.log('醸造酒');
        break;
}
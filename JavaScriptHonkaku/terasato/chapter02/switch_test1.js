let rank = 'B';
switch (rank) {
    case 'A':
        console.log('Aランクです。');
        break;
    case 'B':
        console.log('Bランクです。');
        break;
    case 'C':
        console.log('Cランクです。');
        break;
    default:
        console.log('ランク外です。');
        break;
}

/*
case rank 
    when 'A' then 'Aランクです。'
    when 'B' then 'Bランクです。'
    when 'C' then 'Cランクです。'
    else 'ランク外です'
end
*/

let n = 1;

switch (n) {
    case '1':
        console.log('A');
        break;
    case 1:
        console.log('B');
        break;
    case 2:
        console.log('C');
        break;
    default:
        console.log('X');
        break;
}

let liquor = '焼酎';
switch (liquor) {
    case '焼酎':
    case 'ウィスキー':
    case 'ブランデー':
        console.log('蒸留酒です。');
        break;
    case '日本酒':
    case 'ビール':
        console.log('醸造酒です。');
        break;
}
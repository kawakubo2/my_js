let rank = 'B';

switch(rank) {
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

switch(rank) {
case 'A':
case 'B':
case 'C':
    console.log('合格');
    break;
default:
    console.log('不合格');
    break;
}

/*
Go言語
switch(rank) {
    case 'A', 'B', 'C':
        fmt.Println("合格")
    else:
        fmt.Println("不合格")
}
*/
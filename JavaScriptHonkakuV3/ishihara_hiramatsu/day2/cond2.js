const clazz = 'BUSINESS';

/*
SQLのCASE構文(1)と同じ
*/
let price;
switch(clazz) {
    case 'ECONOMY':
        price = 30000;
        break;
    case 'BUSINESS':
        price = 100000;
        break;
    case 'FIRST':
        price = 300000;
        break;
    default:
        console.log('クラスの指定に誤りがあります。');
        break;
}
console.log(clazz + 'クラスの料金は' + price + '円です。');
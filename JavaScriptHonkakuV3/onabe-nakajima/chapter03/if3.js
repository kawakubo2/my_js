const gender = 'f';
const age = 38;

let price;
if (gender === 'f') {
    if (age < 0) {
        console.log('年齢は正数を入力してください。');
    } else if (age <= 20) {
        price = 2000;
    } else if (age <= 50) {
        price = 2200;
    } else if (age <= 70) {
        price = 2400;
    } else {
        price = 2600;
    }
} else if (gender === 'm') {
    if (age < 0) {
        console.log('年齢は正数を入力してください。');
    } else if (age <= 20) {
        price = 2400;
    } else if (age <= 50) {
        price = 2800;
    } else if (age <= 70) {
        price = 3200;
    } else {
        price = 3600;
    }
} else {
    console.log('性別はfまたはmを入力してください。');
}

console.log(`性別が${gender === 'f' ? '女性': '男性'}、年齢が${age}歳の料金は${price}円となります。`);
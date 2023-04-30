const ages = [0, 20, 12, 50, 34, 70, 63, 90];
const genders = ['M', 'F'];

for (let age of ages) {
    for (let gender of genders) {
        let price = 0;
        if (gender === 'M') {
            if (age < 0) {
                console.log('年齢は0以上を入力してください。');
            } else if (age <= 20) {
                price = 2400;
            } else if (age <= 50) {
                price = 2800;
            } else if (age <= 70) {
                price = 3200;
            } else {
                price = 3600;
            }
        } else if (gender === 'F') {
            if (age < 0) {
                console.log('年齢は0以上を入力してください。');
            } else if (age <= 20) {
                price = 2000;
            } else if (age <= 50) {
                price = 2200;
            } else if (age <= 70) {
                price = 2400;
            } else {
                price = 2600;
            }
        } else {
            console.log('性別は男性の場合M、女性の場合Fを入力してください。');
        }
        console.log(`年齢: ${age} 性別: ${gender} ---> ${price}円`);
    }
}
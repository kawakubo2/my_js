const age = 70;

if (age >= 65) {
    console.log('映画のシニア割りがあります。');
}

const name = "Taro Yamada";
if (name.indexOf('Yama') !== -1) {
    console.log('名前に"Yama"が含まれています。');
} else {
    console.log('名前に"Yama"が含まれていません。');
}

const bmi = 23;

if (bmi < 18.5) {
    console.log('やせ型です。');
} else if (bmi < 25) {
    console.log('標準');
} else {
    console.log('肥満');
}
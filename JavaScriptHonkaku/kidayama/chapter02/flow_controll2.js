let weight, size;
do {
    weight = Number.parseFloat(prompt('重さ(kg)を入力してください。'));
} while (Number.isNaN(weight) || weight <=  0);
do {
    size = Number.parseFloat(prompt('サイズ(cm)を入力してください'));
} while (Number.isNaN(size) || size <= 0);

const BASIC_PRICE = 200;
let price = 0;
if (weight <= 2) {
    if (size <= 100) {
        price = 500;
    } else if (size <= 300) {
        price = 1000;
    } else {
        price = 2000;
    }
} else if (weight < 5) {
    if (size <= 100) {
        price = 700;
    } else if (size <= 300) {
        price = 1200;
    } else {
        price = 2200;
    }
} else {
    if (size <= 100) {
        price = 1000;
    } else if (size <= 300) {
        price = 1500;
    } else {
        price = 3000;
    }
}
console.log(`${weight}kg、${size}cmの配送料金は${price + BASIC_PRICE}円です。`);
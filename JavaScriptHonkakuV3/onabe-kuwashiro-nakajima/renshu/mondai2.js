let weight = 250;
if (typeof weight !== "number" && /^\d(\.\d)+$/.test(weight)) {
    throw new Error("重さは0以上の数値を入力してください。");
}

let size   = 3.5;
if (typeof size !== "number" && /^\d(\.\d)+$/.test(size)) {
    throw new Error("サイズは0以上の数値を入力してください。");
}

function calcPrice(weight, size) {
    let price = 0;

    if (weight <= 2) {
        if (size <= 100) {
            price = 500;
        } else if (size <= 300) {
            price = 1000;
        } else {
            price = 2000;
        }
    } else if (weight <= 5) {
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
    const BASIC_PRICE = 200;
    return price + BASIC_PRICE;
}

const boxes = [
    {w: 1.5, s: 50, expectd: 700},
    {w: 2.0, s: 50, expectd: 700},
    {w: 1.5, s: 100, expectd: 700},
    {w: 2.0, s: 100, expectd: 700},
    {w: 1.5, s: 150, expectd: 1200},
    {w: 2.0, s: 150, expectd: 1200},
    {w: 1.5, s: 300, expectd: 1200},
    {w: 2.0, s: 300, expectd: 1200},
];

for (const box of boxes) {
    console.log(`重さ: ${box['w']}kg サイズ: ${box['s']}cm ---> ${calcPrice(box['w'], box['s'])}円`);
    console.log(calcPrice(box['w'], box['s']) === box['expectd'] ? '○': '×');
}

const BASIC_PRICE = 200;
let price = 0;
try {
    let size = 220;
    if (size < 0) {
        throw new Error(`サイズが負: ${size}`);
    }
    let weight = 2.5;
    if (weight < 0) {
        throw new Error(`重さが負: ${weight}`);
    }

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
            price = 700;
        } else if (size <= 300) {
            price = 1200;
        } else {
            price = 2200;
        }
    }
    console.log(`配送料金は${price + BASIC_PRICE}円です。`);
} catch (e) {
    console.log(e.message);
}
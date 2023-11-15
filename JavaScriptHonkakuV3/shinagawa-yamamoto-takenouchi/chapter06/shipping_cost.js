function isPositiveNumber(value) {
    if (typeof value !== 'number' || value < 0) {
        throw new TypeError('正の数値を入力してください。');
    }
}

function calc_shipping_cost(weight, size) {
    isPositiveNumber(weight);
    isPositiveNumber(size);    
    const BASIC_CHARGE = 200;
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
    return price + BASIC_CHARGE;
}

const data = [
    {
        weight: 0.5,
        size: 50,
        price: 700
    },
    {
        weight: 1.5,
        size: 120,
        price: 1200
    },
    {
        weight: 1.5,
        size: 350,
        price: 2200
    },
];

let count = 0;
for (const d of data) {
    try {
        let result = '';
        const actual = calc_shipping_cost(d.weight, d.size);
        let expected = d.price;
        result = `期待値: ${expected} 検出値: ${actual}`;
        if (expected === actual) {
            result += ' ○';
            count++;
        } else {
            result += ' ×';
        }
        console.log(result);
    } catch(e) {
        console.log(e.message);
        continue;
    }
}
console.log(count === data.length ? '合格': '不合格');
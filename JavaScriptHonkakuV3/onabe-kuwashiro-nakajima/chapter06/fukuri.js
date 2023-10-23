function fukuri(price, year, rate) {
    if (arguments.length !== 3) {
        throw new Error(`引数の数が間違っています: ${arguments.length}`);
    }
    for (let i = 0; i < year; i++) {
        price *= (1 + (rate / 100)); // price = price * 1.01 
    }
    return price;
}

try {
    for (let i = 0; i < 6; i++) {
            console.log(fukuri(3000, 35, i));
    }
} catch(e) {
    console.log(e.message);
}
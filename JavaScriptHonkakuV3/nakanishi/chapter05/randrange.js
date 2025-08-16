function randrange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i <= 100; i++) {
    const n = randrange(10, 21);
    if (n < 10 || n > 20) {
        throw new Error("範囲外");
    }
    console.log(n);
}
function triangle(base, height) {
    if (!(typeof base === 'number' && base > 0)) {
        throw new Error("底辺は0より大きいの数値");
    }
    if (!(typeof height === 'number' && height > 0)) {
        throw new Error("高さは0より大きいの数値");
    }
    return base * height / 2;
}

try {
    console.log(triangle(-3, -4));
} catch(e) {
    console.log(e.message);
}
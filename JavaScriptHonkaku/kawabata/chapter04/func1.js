function getTriangle(base, height) {
    if (!(typeof base === 'number' && base > 0)) {
        throw new Error("引数が妥当ではない");
    }
    if (!(typeof height === 'number' && height > 0)) {
        throw new Error("引数が妥当ではない");
    }
    return base * height / 2;
}

try {
    console.log(getTriangle(10, 8));
} catch (e) {
    console.log(e);
}
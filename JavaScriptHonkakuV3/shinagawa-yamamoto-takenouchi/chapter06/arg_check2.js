function rectangle_area(width, height) {
    if (arguments.length !== 2) {
        throw new Error('引数の数が一致しません。');
    }
    if (!(typeof width === 'number' && width > 0)) {
        throw new Error('幅が数値でないか、0以下です。');
    }
    if (!(typeof height === 'number' && height > 0)) {
        throw new Error('高さが数値でないか、0以下です。');
    }
    return width * height;
}

try {
    const area = rectangle_area(10, -5);
    console.log(area);
} catch(e) {
    console.log(e.message);
}
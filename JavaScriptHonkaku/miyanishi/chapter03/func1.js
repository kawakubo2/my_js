function getTriangle(base, height) {
    if (typeof base !== 'number') throw new Error('底辺が数値ではない');
    if (base <= 0) throw new Error('底辺がプラスの数値ではない');
    if (typeof height !== 'number') throw new Error('高さが数値ではない');
    if (height <= 0) throw new Error('高さがプラスの数値ではない');
    return base * height / 2;
}

try {
    let area = getTriangle(10 , 'aaa');
} catch (e) {
    console.log(e);
}
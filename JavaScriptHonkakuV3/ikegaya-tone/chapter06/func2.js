function getTriangleArea(base, height) {
    function validate(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error(`正の数値を指定してください: ${value}`); // 例外を投げる
        }
    }
    validate(base);
    validate(height);
    return base * height;
}

let b = 10;
let h = 20;
console.log(`底辺が${b}、高さが${h}の三角形の面積は${getTriangleArea(b, h)}`);

try {
    b = 10;
    h = 'abc';
    console.log(`底辺が${b}、高さが${h}の三角形の面積は${getTriangleArea(b, h)}`);
    console.log(`これが表示されたらNG`);
} catch(e) { // 例外を捕捉する
    console.log(e.message);
}
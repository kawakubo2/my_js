// function命令
function getRectangleArea1(width, height) {
    return width * height;
}

// Functionコンストラクタ経由(セキュリティ的に危険なので原則的に使用しない)
const getRectangleArea2 = new Function('width, height', 'return width * height;');

// 関数リテラル(無名関数、匿名関数とも呼ばれる)
const getRectangleArea3 = function(width, height) {
    return width * height;
}

// アロー関数
const getRectangleArea4 = (width, height) => width * height;

const w = 10;
const h = 8;
console.log(getRectangleArea1(w, h));
console.log(getRectangleArea2(w, h));
console.log(getRectangleArea3(w, h));
console.log(getRectangleArea4(w, h));
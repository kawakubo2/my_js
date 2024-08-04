class Rectangle {
    #width = 0;
    #height = 0;
    // コンストラクタ・インジェクション
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
    // アクセサメソッド ---> プロパティ
    get width() {
        return this.#width;
    }
    // セッター・インジェクション
    set width(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error(`引数が正しくありません: ${value}`);
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    // セッター・インジェクション
    set height(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error(`引数が正しくありません: ${value}`);
        }
        this.#height = value;
    }
    // メソッド
    area() {
        return this.width * this.height;
    }
    diagonal() {
        return Math.hypot(this.width, this.height);
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

const rec1 = new Rectangle(8, 6);
console.log(`幅が${rec1.width}、高さが${rec1.height}の長方形の面積は${rec1.area()}`);

class CoordinateRectangle extends Rectangle {
    #x = 0;
    #y = 0;
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    get x() {
        return this.#x;
    }
    set x(value) {
        if (typeof value !== 'number') {
            throw new Error(`引数が正しくありません: ${value}`);
        }
        this.#x = value;
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        if (typeof value !== 'number') {
            throw new Error(`引数が正しくありません: ${value}`);
        }
        this.#y = value;
    }
    distance() {
        return Math.hypot(this.#x, this.#y);
    }
}

const crec1 = new CoordinateRectangle(4, 3, 8, 6);
const area = crec1.area();
const diagonal = crec1.diagonal();
const perimeter = crec1.perimeter();
const distance = crec1.diagonal();
console.log(area, diagonal, perimeter, distance);
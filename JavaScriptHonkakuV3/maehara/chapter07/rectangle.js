class Rectangle {
    // フィールド
    #width = 0.0;
    #height = 0.0;
    // コンストラクタ
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // プロパティ
    get width() {
        return this.#width;
    }
    set width(value) {
        if (typeof value !== 'number' || value < 5) {
            throw new TypeError("幅は5以上で指定してください。");
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (typeof value !== 'number' || value < 5) {
            throw new TypeError("高さは5以上で指定してください。");
        }
        this.#height = value;
    }
    // メソッド
    getArea() {
        return this.width * this.height;
    }
    /**
     * 幅と高さを使って対角線を求め返すメソッド
     * @returns 
     */
    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    toString() {
        return `Rectangle class: width=${this.width} height=${this.height}`;
    }
}

const r1 = new Rectangle(10, 12);
const r2 = new Rectangle(6, 8);

console.log(`r1: 面積: ${r1.getArea()} 対角線: ${r1.getDiagonal()} 外周: ${r1.getPerimeter()}`);
console.log(`r2: 面積: ${r2.getArea()} 対角線: ${r2.getDiagonal()} 外周: ${r2.getPerimeter()}`);

class CoordateRectangle extends Rectangle {
    #x = 0.0; // x座標
    #y = 0.0; // y座標
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
            throw new TypeError('x座標は数値を指定してください。');
        }
        this.#x = value;
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        if (typeof value !== 'number') {
            throw new TypeError('y座標は数値を入力してください');
        }
        this.#y = value;
    }
    getDistance() {
        return Math.hypot(this.x, this.y);
    }
}

const cr1 = new CoordateRectangle(10, 8, 32, 21);
console.log(`面積: ${cr1.getArea()}`);
console.log(`対角線: ${cr1.getDiagonal()}`);
console.log(`外周: ${cr1.getPerimeter()}`);
console.log(`原点からの距離: ${cr1.getDistance()}`);
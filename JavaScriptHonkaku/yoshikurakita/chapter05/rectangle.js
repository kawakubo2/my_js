// rectangle.js

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(width) {
        if (typeof(width) !== 'number' || width <= 0) {
            throw new Error("幅が不正");
        }
        this._width = width;
    }

    get width() {
        return this._width;
    }

    set height(height) {
        if (typeof(height) !== 'number' || height <= 0) {
            throw new Error("高さが不正");
        }
        this._height = height;
    }

    get height() {
            return this._height;
        }
        // 面積
    getArea() {
        return this.width * this.height;
    }

    // 対角線
    getDiagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }

    // 外周
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

class CoordinateRectangle extends Rectangle {
    constructor(width, height, x, y) {
        super(width, height);
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    distance() {
        return Math.hypot(this.x, this.y);
    }
}

let rec1 = new Rectangle(3, 4); // コンストラクタ・インジェクション

try {
    rec1.width = 10;
    rec1.height = 10;

    console.log(`幅: ${rec1.width}`);
    console.log(`幅: ${rec1.height}`);

    let co1 = new CoordinateRectangle(3, 4, 6, 8);
    console.log(`面積: ${co1.getArea()}`);
    console.log(`原点からの距離: ${co1.distance()}`);
} catch (e) {
    console.log(e.message);
}
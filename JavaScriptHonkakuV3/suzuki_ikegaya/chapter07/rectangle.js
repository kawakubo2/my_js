class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    // 面積を求めるメソッド
    getArea() {
        return this.width * this.height;
    }
    // 対角線の長さを求めるメソッド
    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
    // 外周の長さを求めるメソッド
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

const rectangles = [
    new Rectangle(4, 3),
    new Rectangle(6, 8),
    new Rectangle(10, 10)
];

let total = 0;
for (const rectangle of rectangles) {
    total += rectangle.getArea();
    console.log('---------------------------------------------------------');
    console.log(rectangle);
    console.log(`面積: ${rectangle.getArea()}`);
    console.log(`対角線: ${rectangle.getDiagonal()}`);
    console.log(`外周: ${rectangle.getPerimeter()}`);
}
console.log('---------------------------------------------------------');
console.log(`面積の合計: ${total}`);

class CoordinateRectangle extends Rectangle {
    constructor(width, height, x, y) {
        super(width, height); // Rectangleクラスのコンストラクタを呼び出している
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return Math.hypot(this.x, this.y);
    }
}

const rec = new CoordinateRectangle(3, 4, 10, 10);

console.log('---------------------------------------------------------');
console.log('------< CoordinateRectangle >------');
console.log(`面積: ${rec.getArea()}`);
console.log(`対角線: ${rec.getDiagonal()}`);
console.log(`外周: ${rec.getPerimeter()}`);
console.log(`原点からの距離: ${rec.getDistance()}`);
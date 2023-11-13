class BaseRectangle {
    #width = 0.0;
    #height = 0.0;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get width() {
        return this.#width;
    }
    set width(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new TypeError('正の数値を指定してください。');
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new TypeError('正の数値を指定してください。');
        }
        this.#height= value;
    }
    getArea() {
        return this.width * this.height;
    }
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

class CoordinateRectangle extends BaseRectangle {
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.hypot(this.x, this.y);
    }
    toString() {
        return super.toString() + ` x座標=${this.x} y座標=${this.y}`;
    }
}

console.log('-------< BaseRectangleのテスト ------');
const rec1 = new BaseRectangle(4, 3);
const rec2 = new BaseRectangle(10, 10);
const rec3 = new BaseRectangle(8, 6);

console.log(rec1.toString());
console.log(`面積: ${rec1.getArea()}`);
console.log(`対角線: ${rec1.getDiagonal()}`);
console.log(`外周: ${rec1.getPerimeter()}`);
console.log(rec2.toString());
console.log(`面積: ${rec2.getArea()}`);
console.log(`対角線: ${rec2.getDiagonal()}`);
console.log(`外周: ${rec2.getPerimeter()}`);
console.log(rec3.toString());
console.log(`面積: ${rec3.getArea()}`);
console.log(`対角線: ${rec3.getDiagonal()}`);
console.log(`外周: ${rec3.getPerimeter()}`);

const rectangles = [rec1, rec2, rec3];
console.log('---< 面積順でソート >---');
rectangles.sort((r1, r2) => r1.getArea() - r2.getArea());
for (const r of rectangles) {
    console.log(r.toString());
}

console.log('-------< CoordinateRectangleのテスト ------');
const crec1 = new CoordinateRectangle(4, 3, 5, 3);
const crec2 = new CoordinateRectangle(10, 10, 1, 2);
const crec3 = new CoordinateRectangle(8, 6, 3, 4);

console.log(crec1.toString());
console.log(`面積: ${crec1.getArea()}`);
console.log(`対角線: ${crec1.getDiagonal()}`);
console.log(`外周: ${crec1.getPerimeter()}`);
console.log(`原点からの距離: ${crec1.distance()}`);
console.log(crec2.toString());
console.log(`面積: ${crec2.getArea()}`);
console.log(`対角線: ${crec2.getDiagonal()}`);
console.log(`外周: ${crec2.getPerimeter()}`);
console.log(`原点からの距離: ${crec2.distance()}`);
console.log(crec3.toString());
console.log(`面積: ${crec3.getArea()}`);
console.log(`対角線: ${crec3.getDiagonal()}`);
console.log(`外周: ${crec3.getPerimeter()}`);
console.log(`原点からの距離: ${crec3.distance()}`);

const rectangles2 = [crec1, crec2, crec3];
console.log('---< 原点からの距離順でソート >---')
rectangles2.sort((r1, r2) => r1.distance() - r2.distance());
for (const r of rectangles2) {
    console.log(r.toString());
}
class Rectangle {
    // コンストラクタ
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * 面積を求めるメソッド
     * @returns float: 面積
     */
    getArea() {
        return this.width * this.height;
    }
    /**
     * 外周を求めるメソッド
     * @returns float: 外周
     */
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    // 対角線を求めるメソッド
    /**
     * 対角線を求めるメソッド
     * @returns flaot: 対角線
     */
    getDiagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
    // インスタンスの情報を返すメソッド
    toString() {
        return `Rectangle: width=${this.width}, height=${this.height}`;
    }
}

class CoordinateRectangle extends Rectangle {
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return Math.hypot(this.x, this.y); // Math.sqrt(x ** 2 + y ** 2);
    }
    toString() {
        return super.toString() + `, x=${this.x}, y=${this.y}`;
    }
}

const rect_arrays = [
    new Rectangle(5, 4),
    new Rectangle(8, 12),
    new Rectangle(6, 8),
    new Rectangle(3, 4)
];

for (const rect of rect_arrays) {
    console.log('--------------------------');
    console.log(rect.toString());
    console.log(`面積: ${rect.getArea()}`);
    console.log(`外周: ${rect.getPerimeter()}`);
    console.log(`対角線: ${rect.getDiagonal()}`);
}

const rect = new Rectangle(10, 20);

const crect = new CoordinateRectangle(6, 8, 10, 10);
console.log(crect.toString());
console.log(`面積: ${crect.getArea()}`);
console.log(`外周: ${crect.getPerimeter()}`);
console.log(`対角線: ${crect.getDiagonal()}`);
console.log(`原点からの距離: ${crect.getDistance()}`);

const regexp = new RegExp('^\\d{3}-\\d{4}$', 'i');
const zip_arrays = ['123-4567', '1234-567'];
for (const zip of zip_arrays) {
    console.log(regexp.test(zip));
}

/*
PHP
array_push, array_pop, array_unshift, array_shift
xxx.push    xxx.pop    xxx.unshift    xxx.shift
*/
class Rectangle {
    #width = 0;
    #height = 0;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this.#width;
    }
    set width(value) {
        if (value === null || value === undefined || typeof value !== 'number' || value <= 0) {
            throw new Error(`幅が不正: ${value}`)
        }
        this.#width = value;
    }

    get height() {
        return this.#height;
    }
    set height(value) {
        if (value === null || value === undefined || typeof value !== 'number' || value <= 4) {
            throw new Error(`高さが不正: ${value}`)
        }
        this.#height = value;
    }
    
    getArea() {
        return this.#width * this.#height;
    }
    getDiagonal() {
        return Math.hypot(this.#width, this.#height);
    }
    getPerimeter() {
        return (this.#width + this.#height) * 2;
    }
}

class CoordinateRectangle extends Rectangle {
    #x = 0.0;
    #y = 0.0;
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    get x() {
        return this.#x; 
    }
    set x(value) {
        this.#x = value;
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
    }
    getDistance() {
        return Math.hypot(this.x, this.y);
    }
}

const rec1 = new Rectangle(6, 8);
const rec2 = new Rectangle(9, 10);


console.log(`rec1: 幅: ${rec1.width} 高さ: ${rec1.height}`);
console.log(`rec2: 幅: ${rec2.width} 高さ: ${rec2.height}`);

console.log(`rec1: 面積: ${rec1.getArea()} 対角線: ${rec1.getDiagonal()} 外周: ${rec1.getPerimeter()}`);
console.log(`rec2: 面積: ${rec2.getArea()} 対角線: ${rec2.getDiagonal()} 外周: ${rec2.getPerimeter()}`);

rec3 = new CoordinateRectangle(5, 7, 10, 20);
rec4 = new CoordinateRectangle(6, 8, 15, 15);

console.log(`rec3: 原点からの距離: ${rec3.getDistance()}`);
console.log(`rec4: 原点からの距離: ${rec4.getDistance()}`);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }
    set width(value) {
        if (typeof value === 'number' && value > 0) {
            this._width = value;
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (typeof value === 'number' && value > 0) {
            this._height = value;
        }
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
}

const rect = new Rectangle(6, 8);
console.log(`面積: ${rect.getArea()}`);
console.log(`対角線: ${rect.getDiagonal()}`);
console.log(`外周: ${rect.getPerimeter()}`);
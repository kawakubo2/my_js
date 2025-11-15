class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
}

const rectangles = [new Rectangle(3, 4), new Rectangle(10, 20), new Rectangle(8, 6)];
for (const rec of rectangles) {
    console.log(`面積: ${rec.getArea()} 対角線: ${rec.getDiagonal().toFixed(2)}`);
}

Rectangle.prototype.getPerimeter = function() {
    return (this.width + this.height) * 2;
}

console.log('動的に追加したgetPerimeterが使えるが実験');
for (const rec of rectangles) {
    console.log(`面積: ${rec.getArea()} 対角線: ${rec.getDiagonal().toFixed(2)} 外周: ${rec.getPerimeter()}`);
}
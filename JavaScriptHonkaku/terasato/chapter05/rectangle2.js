class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /*
    get width() {
        return this.width;
    }
    set width(value) {
        this.width = value;
    }
    get height() {
        return this.height;
    }
    set height(value) {
        this.height = value;
    }
    */
    area() {
        return this.width * this.height;
    }
    diagonal() {
        return Math.hypot(this.width, this.height);
    }
}

class GeometricRectangle extends Rectangle {
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.hypot(this.x, this.y);
    }
}

let rec1 = new Rectangle(3, 4);
let rec2 = new Rectangle(8, 6);

console.log(`rec1の面積: ${rec1.area()}`)
console.log(`rec1の対角線: ${rec1.diagonal()}`)
// console.log(`rec1の原点からの距離: ${rec1.distance()}`);
console.log(`rec2の面積: ${rec2.area()}`)
console.log(`rec2の対角線: ${rec2.diagonal()}`)

rec1.color = 'white';
console.log(rec1.color);
Rectangle.prototype.perimeter = function() {
    return (this.width + this.height) * 2;
};

console.log(`rec1の外周: ${rec1.perimeter()}`);

let rec3 = new GeometricRectangle(3, 4, 8, 6);
console.log(`rec3の面積: ${rec3.area()}`);
console.log(`rec3の対角線: ${rec3.diagonal()}`);
console.log(`rec3の原点からの距離: ${rec3.distance()}`);
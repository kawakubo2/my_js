export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            throw new Error("負の値");
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value <= 0) {
            throw new Error("負の値");
        }
        this._height = value;
    }

    getArea() {
        return this.width * this.height;
    }

    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error("値が負");
        }
        this._radius = value;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
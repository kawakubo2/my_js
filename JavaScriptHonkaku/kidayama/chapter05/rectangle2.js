// Math.hypot(x, y) ---> Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error("正の数値を入力してください");
        }
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error("正の数値を入力してください");
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

try {
    const rec1 = new Rectangle(8, -6);
    console.log(`面積: ${rec1.getArea()}`);
    console.log(`対角線: ${rec1.getDiagonal()}`);
} catch(e) {
    console.log(e.message);
}

try {
    const rec2 = new Rectangle(4, 3);
    rec2.width = -3;
    console.log(`面積: ${rec2.getArea()}`);
    console.log(`対角線: ${rec2.getDiagonal()}`);
} catch (e) {
    console.log(e.message);
}
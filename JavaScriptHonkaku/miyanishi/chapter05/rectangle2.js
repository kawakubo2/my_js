class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }
    set width(value) {
        if (typeof value === 'number' && value >= 10) {
            this._width = value;
        } else {
            throw new Error('幅が10より小さい数値です。');
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (typeof value === 'number' && value >= 10) {
            this._height = value;
        } else {
            throw new Error('高さが10より小さい数値です。');
        }
    }
    getArea() {
        return this.width * this.height;
    }
}

// 例外処理
try {
    let r1 = new Rectangle(3, 20);
    console.log(`面積: ${r1.getArea()}`);
} catch(e) {
    console.log(e.message);
}
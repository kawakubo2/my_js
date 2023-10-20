class Rectangle {
    // コンストラクタ
    #width = 0.0;
    #height = 0.0;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        Object.freeze(this);
    }
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
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

Object.freeze(Rectangle.prototype);

const rec = new Rectangle(10, 8);
console.log(rec.toString());
rec.width = 20;
console.log(rec.toString());

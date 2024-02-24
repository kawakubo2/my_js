export const AUTHOR = 'Taro Yamada';

export default class Rectangle {
    // フィールド
    #width = 0.0;
    #height = 0.0;
    // コンストラクタ
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // プロパティ
    get width() {
        return this.#width;
    }
    set width(value) {
        if (typeof value !== 'number' || value < 5) {
            throw new TypeError("幅は5以上で指定してください。");
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (typeof value !== 'number' || value < 5) {
            throw new TypeError("高さは5以上で指定してください。");
        }
        this.#height = value;
    }
    // メソッド
    getArea() {
        return this.width * this.height;
    }
    /**
     * 幅と高さを使って対角線を求め返すメソッド
     * @returns 
     */
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

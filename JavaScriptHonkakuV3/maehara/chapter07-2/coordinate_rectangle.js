import Rectangle, { AUTHOR } from "./rectangle.js";
console.log(`著者: ${AUTHOR}`);

export default class CoordinateRectangle extends Rectangle {
    #x = 0.0; // x座標
    #y = 0.0; // y座標
    constructor(width, height, x, y) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
    get x() {
        return this.#x;
    }
    set x(value) {
        if (typeof value !== 'number') {
            throw new TypeError('x座標は数値を指定してください。');
        }
        this.#x = value;
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        if (typeof value !== 'number') {
            throw new TypeError('y座標は数値を入力してください');
        }
        this.#y = value;
    }
    getDistance() {
        return Math.hypot(this.x, this.y);
    }
}

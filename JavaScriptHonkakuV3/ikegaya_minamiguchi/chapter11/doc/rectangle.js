/**
 * @class
 * @classdesc 長方形クラス
 * @param {number} width 幅
 * @param {number} height 高さ
 * @throws {Error} width, height 数値型ではないか、または0以下の数値
 * @author Tomoharu Kawakubo
 * @version 1.0.0
 */
export class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get width() {
        return this.#width;
    }
    set width(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error(`幅は0より大きい値を指定してください: ${value}`);
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error(`高さは0より大きい値を指定してください: ${value}`);
        }
        this.#height = value;
    }
    /**
     * プロパティのwidthとheightを使って面積を求め返す
     * @returns {number} 面積
     */
    getArea() {
        return this.width * this.height;
    }
}

export function add(x, y) {
    return x + y;
}
/**
 * @classDesc 幅と高さを持つ長方形クラス。
 * @author Tomoharu Kawakubo
 * @version 1.0.0
 */
class Rectangle {
    /**
     * @constructor
     * @param {float} width 幅
     * @param {float} height 高さ
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * @desc 幅と高さから面積を計算してその結果を返す。
     * @returns {float} 面積
     */
    getArea() {
        return this.width * this.height;
    }
    /**
     * @desc 幅と高さから外周の長さを計算してその結果を返す。
     * @returns {float} 外周の長さ
     */
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    /**
     * @desc 幅と高さから対角線の長さを計算してその結果を返す。
     * @returns {float} 対角線の長さ
     */
    getDiagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
}

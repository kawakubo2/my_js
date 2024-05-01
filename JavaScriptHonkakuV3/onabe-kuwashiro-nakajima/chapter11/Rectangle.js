export default
/**
 * 幅と高さを持った長方形クラス
 * 面積、対角線の長さ、外周を計算することができる
 * @author Taro Yamada
 * @version 1.0.0
 */
class Rectangle {
    /**
     * @class
     * @param [number] width 長方形の幅
     * @param [number] height 長方形の高さ
     */
    constructor(width, height) {
        if (typeof width !== "number") throw new TypeError("幅が数値型ではない");
        if (typeof height !== "number") throw new TypeError("高さが数値型ではない");
        if (width <= 0) throw new RangeError("幅が0以下");
        if (height <= 0) throw new RangeError("高さが0以下");
        this.width = width;
        this.height = height;
    }
    /**
     * プロパティのwidthとheightから面積を計算し、返す
     * @returns widthとheightの積をnumber型として返す
     */
    area() {
        return this.width * this.height;
    }
    /**
     * プロパティのwidthとheightから対角線の長さを計算し、返す
     * @returns widthとheightから対角線の長さをnumber型として返す
     */
    diagonal() {
        return Math.hypot(this.width, this.height);
    }
    /**
     * プロパティのwidthとheightから外周の長さを計算し、返す
     * @returns widthとheightから外周の長さをnumber型として返す
     */
    perimeter() {
        return (this.width + this.height) * 2;
    }
}
'use strict';

function mypow(n, p) {
    'use strict';
    result = 1;
    for (let i = 0; i < p; i++) {
        result *= n;
    }
    return result;
}

let result = 1000;

console.log(mypow(2, 3));

console.log(Math.floor(result * 1.1));

class Rectangle {
    /*
        コンストラクタ
    */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /*
        プロパティ
    */
    get width() {
        return this._width;
    }
    set width(val) {
        if (!(typeof val === 'number' && val > 0)) {
            throw new Error('幅が数値ではないか、0以下');
        }
        this._width = val;
    }
    get height() {
        return this._height
    }
    set height(val) {
        if (!(typeof val === 'number' && val > 0)) {
            throw new Error('高さが数値ではないか、0以下');
        }
        this._height = val;
    }
    /*
     メソッド定義
    */
    getArea() {
        return this.width * this.height;
    }
    getDiagonal() {
        return Math.hypot(this.width, this.height);
    }
}

let rec1 = new Rectangle(3, 4);
let rec2 = new Rectangle(6, 8);

console.log(`幅が${rec1.width}、高さが${rec1.height}の長方形の面積は${rec1.getArea()}`);
console.log(`幅が${rec2.width}、高さが${rec2.height}の長方形の面積は${rec2.getArea()}`);

console.log(`幅が${rec1.width}、高さが${rec1.height}の長方形の対角線は${rec1.getDiagonal()}`);
console.log(`幅が${rec2.width}、高さが${rec2.height}の長方形の対角線は${rec2.getDiagonal()}`);
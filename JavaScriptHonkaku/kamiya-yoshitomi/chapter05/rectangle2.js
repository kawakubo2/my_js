const Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype = {
    getArea:function() {
        return this.width * this.height;
    },
    getDiagonal: function() {
        return Math.hypot(this.width, this.height);
    },
    getPerimeter: function() {
        return (this.width + this.height) * 2;
    }
};


const rec1 = new Rectangle(3, 4);
const rec2 = new Rectangle(6, 8);

console.log(`面積: ${rec1.getArea()} 対角線: ${rec1.getDiagonal()} 外周: ${rec1.getPerimeter()}`);
console.log(`面積: ${rec2.getArea()} 対角線: ${rec2.getDiagonal()} 外周: ${rec2.getPerimeter()}`);

// 左上の頂点の座標を持つ長方形クラス
const CoordRectangle = function(width, height, x, y) {
    Rectangle.call(this, width, height);
    this.x = x;
    this.y = y;
}; 

CoordRectangle.prototype = new Rectangle();
CoordRectangle.prototype.distance = function() {
    return Math.hypot(this.x, this.y);
    // return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
};

const crec = new CoordRectangle(3, 4, 6, 8);
// Rectangleから継承したメソッドの呼び出し
console.log(`面積: ${crec.getArea()}`);
console.log(`対角線: ${crec.getDiagonal()}`);
console.log(`外周: ${crec.getPerimeter()}`);
// CoordRectangleのメソッド呼び出し
console.log(`原点からの距離: ${crec.distance()}`);


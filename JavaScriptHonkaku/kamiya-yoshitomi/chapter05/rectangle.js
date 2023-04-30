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
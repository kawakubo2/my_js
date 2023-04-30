/*
 コンストラクタの定義
*/
let Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};

/*
 メソッドの定義
*/

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
Rectangle.prototype.getDiagonal = function() {
    return Math.hypot(this.width, this.height);
}
Rectangle.prototype.getPerimeter = function() {
    return (this.width + this.height) * 2;
}

let rec1 = new Rectangle(3, 4);
let rec2 = new Rectangle(8, 6);

console.log(`rec1の面積: ${rec1.getArea()}`);
console.log(`rec2の面積: ${rec2.getArea()}`);
console.log(`rec1の対角線: ${rec1.getDiagonal()}`);
console.log(`rec2の対角線: ${rec2.getDiagonal()}`);
console.log(`rec1の外周: ${rec1.getPerimeter()}`);
console.log(`rec2の外周: ${rec2.getPerimeter()}`);
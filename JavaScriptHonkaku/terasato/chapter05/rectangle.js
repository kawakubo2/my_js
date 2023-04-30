const Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.area = function() {
    return this.width * this.height;
};
Rectangle.prototype.diagonal = function() {
    return Math.hypot(this.width, this.height);
};

const GeometricRectangle = function(width, height, x, y) {
    Rectangle.call(this, width, height);
    this.x = x;
    this.y = y;
}
GeometricRectangle.prototype.distance = function() {
    return Math.hypot(this.width, this.height);
}

const rec1 = new Rectangle(4, 3);
const rec2 = new Rectangle(6, 8);

console.log(`rec1の面積: ${rec1.area()}`);
console.log(`rec1の対角線: ${rec1.diagonal()}`);
console.log(`rec2の面積: ${rec2.area()}`);
console.log(`rec2の対角線: ${rec2.diagonal()}`);

const rec3 = new GeometricRectangle(8, 6, 4, 3);
console.log(`rec3の面積: ${rec3.area()}`);
console.log(`rec3の対角線: ${rec3.diagonal()}`);
console.log(`rec3の原点からの距離: ${rec3.distance()}`);
const Rectangle = function(width, height) {
    this.width= width;
    this.height = height;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
Rectangle.prototype.getDiagonal = function() {
    return Math.hypot(this.width, this.height); 
}

const rec1 = new Rectangle(3, 4);
console.log(`面積: ${rec1.getArea()}`);
console.log(`対角線: ${rec1.getDiagonal()}`);

const CoordinateRectangle = function(width, height, x, y) {
    Rectangle.call(this, width, height);
    this.x = x;
    this.y = y;
}

CoordinateRectangle.prototype = new Rectangle();

CoordinateRectangle.prototype.distance = function() {
    return Math.hypot(this.x, this.y);
}

const coordrec1 = new CoordinateRectangle(3, 4, 8, 6);
console.log(`面積: ${coordrec1.getArea()}`);
console.log(`対角線: ${coordrec1.getDiagonal()}`);
console.log(`原点からの距離: ${coordrec1.distance()}`);


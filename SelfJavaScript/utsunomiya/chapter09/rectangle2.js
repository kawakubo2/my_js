const Rectangle = function(width, height) {
    var width = width;
    var height = height;
    this.getWidth = function() {
        return width;
    }
    this.setWidth = function(value) {
        width = value;
    }
    this.getHeight= function() {
        return height;
    }
    this.setHeight = function(value) {
        height = value;
    }
};

Rectangle.prototype.area = function() {
    return this.getWidth() * this.getHeight();
}
Rectangle.prototype.diagonal = function() {
    return Math.hypot(this.getWidth(), this.getHeight());
}

const r1 = new Rectangle(6, 8);
console.log(`幅: ${r1.getWidth()} 高さ: ${r1.getHeight()}`)
console.log(`面積: ${r1.area()}`);
console.log(`対角線: ${r1.diagonal()}`);
function Triangle() {
    let _base;
    let _height;

    let _checkArgs = function(val) {
        return (typeof val === 'number' && val > 0);
    }

    this.setBase = function(base) {
        if (!_checkArgs(base)) throw new Error("底辺が数値でないか、0より大きい値ではありません。");
        _base = base;
    }
    this.getBase = function () {
        return _base;
    }
    this.setHeight = function(height) {
        if (!_checkArgs(height)) throw new Error("高さが数値でないか、0より大きい値ではありません。");
        _height = height;
    }
    this.getHeight = function() {
        return _height;
    }
}
Triangle.prototype.getArea = function() {
    return this.getBase() * this.getHeight() / 2;
}
const tri = new Triangle();
tri.setBase(10);
tri.setHeight(8);
console.log(`底辺が${tri.getBase()}、高さが${tri.getHeight()}の三角形の面積は${tri.getArea()}`);
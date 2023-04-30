function Triangle() {
    let _base;
    let _height;

    let _checkArgs = function(val) {
        return typeof val === 'number' && val > 0;
    }

    this.setBase = base => {
        if (_checkArgs(base)) _base = base;
    }
    this.getBase = () => _base;

    this.setHeight = height => {
        if (_checkArgs(height)) _height = height;
    }
    
    this.getHeight = () => _height;
}

Triangle.prototype.getArea = function() {
    return this.getBase() * this.getHeight() / 2;
}

let t = new Triangle();
t.setBase(10);
t.setHeight(2);

console.log('三角形の面積は: ' + t.getArea());
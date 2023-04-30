function Triangle() {
    let _base;
    let _height;

    Object.defineProperty(
        this,
        'base',
        {
            get: function() {
                return _base;
            },
            set: function(base) {
                if (typeof base !== 'number' || base <= 0) throw new Error("底辺が数値でないか、0より大きくありません");
                _base = base;
            }
        }
    );

    Object.defineProperty(
        this,
        'height',
        {
            get: function() {
                return _height;
            },
            set: function(height) {
                if (typeof height !== 'number' || height <= 0) throw new Error("高さが数値でないか、0より大きくありません");
                _height = height;
            }
        }
    );
}

Triangle.prototype.getArea = function() {
    return this.base * this.height / 2;
}

const tri = new Triangle();
tri.base = 10;
tri.height = 2;
console.log(`底辺が${tri.base}、高さが${tri.height}の三角形の面積は${tri.getArea()}`);
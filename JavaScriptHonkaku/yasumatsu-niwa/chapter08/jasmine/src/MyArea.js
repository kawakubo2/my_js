class MyArea {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getTriangle() {
        return this.base * this.height / 2;
    }
    getSquare() {
        return this.base * this.height;
    }
}
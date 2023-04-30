var Wings = Wings || {};
Wings.Triangle = function(base, height) {
    this.base = base;
    this.height = height;
}
Wings.Triangle.prototype.getArea = function() {
    return this.base * this.height / 2;
}
console.log('---< test2.js >---');
console.log(Wings);
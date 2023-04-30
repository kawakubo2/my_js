let Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    }
}

let r1 = new Rectangle(10, 20);
let r2 = new Rectangle(5, 3);

console.log(r1.area());
console.log(r2.area());
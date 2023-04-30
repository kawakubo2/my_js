// rectangl1.js
let Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
    // Object.seal(this);
}

let rec1 = new Rectangle(3, 4);
let rec2 = new Rectangle(5.24, 4.351);

rec1.getDiagonal = function() {
    return Math.hypot(this.width ** 2 + this.height ** 2);
}

console.log(rec1.getArea());
console.log(rec1.getDiagonal()); // getDiagonalはrec1のみ保持するメソッド
console.log(rec2.getArea());
// console.log(rec2.getDiagonal()); // getDiagonalはrec2に存在しないから使えない
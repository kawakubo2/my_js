class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    valueOf() {
        return Math.hypot(this.x, this.y);
    }
}

const c = new Coordinate(5, 2);
console.log(`${c}`);
console.log(-c);
console.log(c + '');

const today = new Date();
const one_day = 1000 * 60 * 60 * 24;
console.log(one_day + +today);
console.log(new Date(one_day + +today));
console.log(+today);

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
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.valueOf();
        }
        return this.toString();
    }
}

const c1 = new Coordinate(6, 8);
const c2 = new Coordinate(12.48, 32.881);

console.log('--- c1 ---');
console.log(`${c1}`);
console.log(+c1);
console.log(c1 + '');
console.log('--- c2 ---');
console.log(`${c2}`);
console.log(+c2);
console.log(c2 + '');
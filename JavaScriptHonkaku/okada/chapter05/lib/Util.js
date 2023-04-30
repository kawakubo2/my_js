export function my_array_sum(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("配列ではない");
    }
    let sum = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            sum += my_array_sum(n);
        } else {
            sum += n;
        }
    }
    return sum;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value !== 'number') {
            throw new Error("数値ではない");
        }
        this._radius = value;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

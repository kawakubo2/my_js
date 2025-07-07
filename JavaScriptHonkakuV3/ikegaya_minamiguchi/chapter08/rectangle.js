class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get width() {
        return this.#width;
    }
    set width(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error(`幅は0より大きい値を指定してください: ${value}`);
        }
        this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (!(typeof value === 'number' && value > 0)) {
            throw new Error(`高さは0より大きい値を指定してください: ${value}`);
        }
        this.#height = value;
    }
    getArea() {
        return this.width * this.height;
    }
}

const r1 = new Rectangle(8, 6);

console.log(`幅が${r1.width}、高さが${r1.height}の長方形の面積は${r1.getArea()}`);
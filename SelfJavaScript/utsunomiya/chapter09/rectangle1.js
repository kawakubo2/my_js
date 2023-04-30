class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }
    // 面積を求めるメソッド
    area() {
        return this.#width * this.#height;
    }
    // 対角線を求めるメソッド
    diagonal() {
        return Math.hypot(this.#width, this.#height);
    }
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }
}

const r1 = new Rectangle(6, 8);
console.log(`幅: ${r1.width} 高さ: ${r1.height}`);
console.log(`面積: ${r1.area()}`);
console.log(`対角線: ${r1.diagonal()}`);
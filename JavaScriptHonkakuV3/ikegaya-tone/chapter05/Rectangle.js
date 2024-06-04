class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // 面積
    area() {
        return this.width * this.height;
    }
    /**
     * 対角線の長さを求める
     * @returns 対角線の長さ
     */
    diagonal() {
        return Math.hypot(this.width, this.height);
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

const rect1 = new Rectangle(3, 4);
const rect2 = new Rectangle(8, 6);


console.log(`長方形1: 幅=${rect1.width} 高さ=${rect1.height}`);
console.log(`面積: ${rect1.area()}`); // newしてインスタンスを作ってからでないと使用できないメソッドをインスタンスメソッドと呼ぶ
console.log(`対角線: ${rect1.diagonal()}`);
console.log(`外周: ${rect1.perimeter()}`);

console.log(`長方形2: 幅=${rect2.width} 高さ=${rect2.height}`);
console.log(`面積: ${rect2.area()}`);
console.log(`対角線: ${rect2.diagonal()}`);
console.log(`外周: ${rect2.perimeter()}`);
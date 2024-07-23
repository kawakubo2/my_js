const rectangle = {
    width: 6,
    height: 8,
    area() {
        return this.width * this.height;
    }
}
console.log(`幅が${rectangle.width}, 高さが${rectangle.height}の長方形の面積は${rectangle.area()}`);

const rectangle2 = JSON.parse(JSON.stringify(rectangle));
// console.log(`幅が${rectangle2.width}, 高さが${rectangle2.height}の長方形の面積は${rectangle2.area()}`);
console.log(`幅が${rectangle2.width}, 高さが${rectangle2.height}の長方形の面積は`);
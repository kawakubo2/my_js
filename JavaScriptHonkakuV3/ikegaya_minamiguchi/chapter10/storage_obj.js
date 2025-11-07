const storage = localStorage;

const rectangle = {
    width: 12,
    height: 8,
    getArea: function() {
        return this.width * this.height;
    }
};

console.log(`Storageへ保存前の長方形の面積: ${rectangle.getArea()}`)
storage.setItem('rectangle', JSON.stringify(rectangle));
const rectangle2 = storage.getItem('rectangle');
console.log(`幅: ${rectangle2.width} 高さ: ${rectangle2.height}`);
console.log(`Storageへ保存前の長方形の面積: ${rectangle2.getArea()}`);

storage.removeItem('rectangle');
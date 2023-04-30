const Rectangle = function(width, height) { // <--- この関数のことをコンストラクタと呼ぶ
    this.width = width;
    this.height = height;
}

Rectangle.prototype = {
    getArea : function() { // <--- メソッド
        return this.width * this.height;
    },
    getDiagonal: function() { // <--- メソッド
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
}
// オブジェクトからインスタンスを生成
let r1 = new Rectangle(3, 4);
let r2 = new Rectangle(6, 8);

console.log(`r1 面積: ${r1.getArea()} 対角線: ${r1.getDiagonal()}`)
console.log(`r2 面積: ${r2.getArea()} 対角線: ${r2.getDiagonal()}`)

let fruits = new Map(); // <--- クラスからインスタンスを生成するに使用される関数のことをコンストラクタと呼ぶ
fruits.set('オレンジ', 3); // <--- setがメソッド   インスタンス名.メソッド名()
fruits.set('バナナ', 5);
class Human {
    static TYPE = '人';

    static staticMove() {
        console.log(`${Human.TYPE}は歩いて移動します。`);
    }
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name}は歩いて移動します。`);
    }
}

const taro = new Human('太郎');
Human.staticMove();
console.log(Human.TYPE);
console.log('参照変数を使って、静的メソッド・静的プロパティは呼び出せない。');
// taro.staticMove();
// console.log(taro.TYPE);
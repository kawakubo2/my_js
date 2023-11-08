class Member {
    /*
    コンストラクタはオブジェクトからインスタンスを生成する際に呼び出される。
    JavaScriptのコンストラクタはメソッド。JavaやC#のコンストラクタはメソッドではない。
    その違いは、継承時に現れる。
    */
    constructor(name = '名無しの権兵衛', age = 0) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

// 設計図から具体的なものにすることをインスタンス化と呼ぶ。
// インスタンスされたもののことをインスタンスと呼ぶ。
const m = new Member('佐藤理央', 25);
m.show();
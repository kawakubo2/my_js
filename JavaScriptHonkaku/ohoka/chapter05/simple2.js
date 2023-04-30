/*
コンストラクタの定義
    new Member('太郎', '山田')のように、newの次にクラス名で
    呼び出すとコンストラクタが呼び出される。
    thisを付けた変数はコンストラクタ呼び出し後も
    インスタンスに残る。
*/
let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // メソッドの定義(オブジェクトの中で定義された関数をメソッドと呼ぶ)
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

// オブジェクトからインスタンスが生成される
let mem = new Member('祥寛', '山田'); // <--- コンストラクタ呼び出し 
console.log(mem.getName()); // <--- メソッド呼び出し
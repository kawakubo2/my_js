let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let mem = new Member('祥寛', '山田');
// オブジェクトからインスタンスを生成した後、memという変数にだけ
// メソッドを追加している。
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}
console.log(mem.getName());
let mem2 = new Member('奈美', '掛谷');
/*
 getNameはmemインスタンスにだけ存在するメソッドなので
 mem2からは呼び出せない。
 TypeError: mem2.getName is not a function
 となる。
*/
// console.log(mem2.getName());
let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

// オブジェクトからインスタンス化してインスタンスを生成
const mem = new Member('祥寛', '山田');
console.log(mem.getName());
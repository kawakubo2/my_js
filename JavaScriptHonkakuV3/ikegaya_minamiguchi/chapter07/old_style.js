// コンストラクタ
var Member = function(firstname, lastname, birthdate) {
    this.firstname = firstname;
    this.lastanme = lastname;
    this.birthdate = birthdate;
}

// メソッド(prototypeプロパティに作成する)
Member.prototype.getAge = function() {
    var today = new Date();
    var age = today.getFullYear() - this.birthdate.getFullYear();
    if (today.getMonth() < this.birthdate.getMonth() ||
        today.getMonth() === this.birthdate.getMonth() &&
        today.getDate() < this.birthdate.getDate()) {
        
        age--
    }
    return age;
};

var mem1 = new Member('裕子', '星山', new Date(2000, 6, 4));
console.log(`${mem1.lastanme}${mem1.firstname}さんの年齢は${mem1.getAge()}歳です。`);

var mem2 = new Member('久美子', '山本', new Date(1990, 6, 5));
console.log(`${mem2.lastanme}${mem2.firstname}さんの年齢は${mem2.getAge()}歳です。`);

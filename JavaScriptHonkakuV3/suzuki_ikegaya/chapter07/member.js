// クラス定義
class Member {
    // コンストラクタ
    /*
    コンストラクタは特殊メソッドの一種。
    new Member(...)のようにnewの後にクラスメイトと同じ名前で呼び出すと
    自動的に呼び出される
    */
    constructor(firstname, lastname, birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
    // メソッド
    /*
    インスタンスの変数に自由にアクセスできる
    このMemberインスタンスであれば、this.lastname, this.firstname, this.birthdate
    */
    getName() {
        return this.lastname + this.firstname;
    }
    getAge() {
        const today = new Date();
        const tyear = today.getFullYear();
        const tmonth = today.getMonth() + 1;
        const tdate = today.getDate();

        const byear = this.birthdate.getFullYear();
        const bmonth = this.birthdate.getMonth() + 1;
        const bdate = this.birthdate.getDate();

        let age = tyear - byear;
        if (tmonth < bmonth || tmonth === bmonth && tdate < bdate) {
            age--;
        }
        return age;
    }
}

const mem1 = new Member('太郎', '斎藤', new Date('2000-12-21'));
const mem2 = new Member('花子', '横山', new Date('2000-12-20'));
const mem3 = new Member('一郎', '田中', new Date('1972-08-05'));

console.log(mem1);
console.log(mem2);
console.log(mem3);
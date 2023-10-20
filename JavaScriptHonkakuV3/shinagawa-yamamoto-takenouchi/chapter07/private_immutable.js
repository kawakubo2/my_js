class Member {
    #name =  '';
    #birth = new Date();
    constructor(name, birth) {
        this.#name = name;
        this.#birth = new Date(birth.getTime());
        // this.#birth = birth; 参照を直接プロパティに代入してはならない
        Object.freeze(this);
    }
    get name() {
        return this.#name;
    }
    get birth() {
        return new Date(this.#birth.getTime());
        // return this.#birth; // 参照を直接かえしてはならない
    }

    show() {
        console.log(`私の名前は${this.name}、生年月日は${this.birth.toLocaleDateString()}`);
    }
}

Object.freeze(Member.prototype);
/*
Object.freeze(Member.prototype)を指定しないと
メソッドの追加、更新、削除が自由にできてしまう。

Member.prototype.getAge = function() {
    const today = new Date();
    let age = today.getFullYear() - this.birth.getFullYear();
    if (this.birth.getMonth() > today.getMonth() ||
        this.birth.getMonth() === today.getMonth() && this.birth.getDate() > today.getDate()) {
        age--;
    }
    return age;
}
*/

const birth = new Date(1995, 2, 31);
const m = new Member('山田太郎', birth);
const new_birth = m.birth;
new_birth.setMonth(new_birth.getMonth() - 3);
m.show();
// console.log(`${m.name}さんは${m.getAge()}歳です。`); Object.freeze(Member.prototype)しないとgetAge()
// が実行できてしまう。

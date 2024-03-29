/**
 * @class
 * @classdesc メンバーについての情報を管理します。
 * @param {string} name 氏名
 * @param {number} age 年齢
 * @throws Yoshida, Yamada
 * @version 1.0.0
 * 
 */
class Member {
    constructor(name, age) {
        if (name === undefined || age === undefined) {
            throw new Error('name, ageは必須です。');
        }
        this.name = name;
        this.age = age;
    }
    /**
     * メンバーに関する詳細情報を返します。
     * @returns {string} メンバーの氏名と年齢
     * @deprecated {@link Member#toString}メソッドを代わりに利用してください。
     */
    show() {
        return `名前は${this.name}、{this.age}歳です。`;
    }

    /**
     * Memberクラスの内容を文字列化します。
     * @returns {string} メンバーの氏名と年齢
     */
    toString() {
        return `名前は${this.name}、{this.age}歳です。`;
    }
}

const m = new Member('太郎', '山田');
console.log(m.getName());
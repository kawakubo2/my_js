class Member {
    /**
     * @constructor
     * @classdesc メンバーについての情報を管理します。
     * @param {string} firstName 名
     * @param {string} lastName 姓
     * @author Tomoharu Kawakubo
     * @version 1.0.0
     */
    constructor(firstName, lastName) {
        // プロパティを使った値の設定と同じ
        Object.assign(this, {firstName, lastName});
    }

    get firstName() {
        return this._firstName.substring(0, 1);
    }
    set firstName(firstName) {
        if (firstName.length > 1) {
            console.log('1文字を越えています。次回から気をつけてください');
        }
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
    /**
     * メンバーに関する情報を表示します。
     * @return {string} メンバーの氏名
     * @deprecated {@link Member#toString}メソッドを代わりに利用してください
     */
    getName() {
        return this.lastName + ' ' + this.firstName;
    }

    /**
     * Memberクラスの内容を文字列化します。
     * @return {string} メンバーの氏名
     */
    toString() {
        return this.lastName + ' ' + this.firstName;
    }
}

class BusinessMember extends Member {
    /**
     * @constructor
     * @classdesc 役職を付加したメンバーに関する情報を表示します
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} clazz 
     */
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }

    get clazz() {
        return this._clazz;
    }

    set clazz(clazz) {
        this._clazz = clazz;
    }

    /**
     * メンバーに労働させます
     */
    work() {
        return this.getName() + 'は働いています';
    }

    /**
     * 役職付きのメンバーの内容を文字列化します。
     * @return {string} 役職付きメンバーの氏名
     */
    getName() {
        return super.toString() + '/役職:' + this.clazz;
    }
}

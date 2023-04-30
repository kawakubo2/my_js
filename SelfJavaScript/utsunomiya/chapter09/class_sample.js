class User {
    constructor(username, password, roll) {
        this.username = username;
        this.password = password;
        this.roll = roll;
    }
    login() {
        console.log(`ログイン[ ${this.username} / ${this.password}]`)
    }
    changePassword(password) {
        this.password = password;
        console.log(`パスワードが[ ${this.password} ]に変更されました。`);
    }
    checkRoll() {
        console.log(this.roll === 'admin' ? '管理者権限です。' : '一般ユーザです。');
    }
}

const taro = new User('独習太郎', 'taro-pwd', 'user');
const hanako = new User('独習花子', 'hanako-pwd', 'admin');
taro.checkRoll();
hanako.checkRoll();
taro.login();
hanako.login();
taro.changePassword('new-pwd');
taro.login();
hanako.password = 'hanako-new-pwd';
hanako.login();
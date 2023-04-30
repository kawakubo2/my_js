class User {
    constructor(username, deleted = 0) {
        this.username = username;
        this.deleted = deleted;
    }
    login() {
        console.log(this.deleted === 0 ? `${this.username}はログインに成功しました。`: 
            `${this.username}はログインに失敗しました。`);
    }
}

const user1 = new User('yamada');
const user2 = new User('Tanaka', 1);

user1.login();
user2.login();
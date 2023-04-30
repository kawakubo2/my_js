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

class AdminUser extends User {
    deleteUser($user) {
        if (!($user instanceof User)) {
            throw new TypeError('引数がUserインスタンス以外です。');
        }
        if ($user === this) {
            throw new TypeError('自分自身は削除できません。');
        }
        if (this.deleted !== 0) {
            throw new TypeError('削除されたUserは他のUserを削除できません。');
        }
        $user.deleted = 1;
        console.log(`${user.username}を削除しました。`);
    }
}

const adminUser = new AdminUser('Yamada');
const deletedAdminUser = new AdminUser('Suzuki', 1);
const user = new User('Tanaka');

try {
    user.login();
    adminUser.deleteUser(user);
    user.login();
    // deletedAdminUser.deleteUser(user);
    // adminUser.deleteUser(adminUser);
} catch(e) {
    console.log(e.message);
}
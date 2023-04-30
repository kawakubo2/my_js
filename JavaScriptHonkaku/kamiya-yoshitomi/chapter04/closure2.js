// カリー化
function name_log(name) {
    return function(msg) {
        console.log(name + ":" + msg);
    }
}

const namelog1 = new name_log('Yamada');
const namelog2 = new name_log('Tanaka');

namelog1('関数func1にアクセスしました。');
namelog2('ログインしました。');
namelog1('Aクラスのfunc2メソッドにアクセスしました。');
namelog2('アクセス権限がないオブジェクトにアクセスしました。');
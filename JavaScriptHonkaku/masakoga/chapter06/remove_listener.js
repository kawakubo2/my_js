document.addEventListener('DOMContentLoaded', function() {
    let main = document.getElementById('main');
    let add_listener1 = document.getElementById('add_listener1');
    let remove_listener1 = document.getElementById('remove_listener1');
    const listener1 = () => {
        alert('リスナー登録完了！');
    };
    const listener2 = () => {
        console.log(new Date().toLocaleString());
    }
    add_listener1.addEventListener('click', listener1);
    add_listener1.addEventListener('click', listener2);
    remove_listener1.addEventListener('click', function() {
        add_listener1.removeEventListener('click', listener1);
    });
});
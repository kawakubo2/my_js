document.addEventListener('DOMContentLoaded', function() {
    const storage = localStorage;
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        const menu = document.getElementById('menu').value;
        const key = document.getElementById('key').value;
        const value = document.getElementById('value').value;
        if (menu == 1) { // 追加
            storage.setItem(key, value);
        } else if (menu == 2) { // 削除
            storage.removeItem(key);
        } else if (menu == 3) {
            console.log(`storage[${key}]=${storage[key]}`);
        }
        menu = '';
        key = '';
        value = '';
    });
});
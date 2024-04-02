document.addEventListener('DOMContentLoaded', () => {
    const add_or_update_button = document.querySelector('#add-or-update');
    const delete_button = document.querySelector('#delete');
    const key = document.querySelector('#key');
    const value = document.querySelector('#value');

    const storage = localStorage;
    /*
     キーが存在すれば、値の更新
     存在しなければ、キー・値の追加
    */
    add_or_update_button.addEventListener('click', () => {
        if (key.value && value.value) {
            storage[key.value] = value.value;
        }
    });
    delete_button.addEventListener('click', () => {
        if (key.value) {
            delete storage[key.value];
        }
    });
});
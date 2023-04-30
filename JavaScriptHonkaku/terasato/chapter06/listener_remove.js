document.addEventListener('DOMContentLoaded', function() {
    const my_alert = () => alert('こんにちは、世界！');
    const alert_button = document.getElementById('alert');
    const add_button = document.getElementById('add');
    const remove_button = document.getElementById('remove');
    add_button.disabled = false;
    remove_button.disabled = true;

    add_button.addEventListener('click', function() {
        alert_button.addEventListener('click', my_alert);
        add_button.disabled = true;
        remove_button.disabled = false;
    });
    remove_button.addEventListener('click', function() {
        alert_button.removeEventListener('click', my_alert);
        add_button.disabled = false;
        remove_button.disabled = true;
    });
});
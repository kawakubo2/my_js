document.addEventListener('DOMContentLoaded', () => {
    const storage = localStorage;
    document.getElementById('add').addEventListener('click', () => {
        storage.setItem(document.getElementById('key1').value, document.getElementById('value').value);
        storage.save();
    });
    document.getElementById('remove').addEventListener('click', () => {
        storage.removeItem(document.getElementById('key2').value);
        storage.save();
    });
});
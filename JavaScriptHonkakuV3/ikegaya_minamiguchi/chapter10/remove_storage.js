const storage = localStorage;
if (storage.fruit1) {
    console.log('fruit1を削除');
    storage.removeItem('fruit1');
}
if (storage.fruit2) {
    console.log('fruit2を削除');
    storage.removeItem('fruit2');
}
if (storage.fruit3) {
    console.log('fruit3を削除');
    storage.removeItem('fruit3');
}
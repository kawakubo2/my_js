document.addEventListener('DOMContentLoaded', function() {
    let storage = localStorage;
    let member = { name: '山田太郎', age: 38 };
    document.getElementById('add').addEventListener('click', function() {
        storage.setItem('fruit1', 'りんご');
        storage.fruit2 = 'みかん';
        storage['fruit3'] = 'ぶとう';
        storage['member'] = JSON.stringify(member);
    });
    document.getElementById('get').addEventListener('click', function() {
        console.log(storage.getItem('fruit1'));
        console.log(storage.fruit2);
        console.log(storage['fruit3']);
        console.log(JSON.parse(storage['member']));
    });
    document.getElementById('remove').addEventListener('click', function() {
        storage.removeItem('fruit1');
        delete storage.fruit2;
        delete storage['fruit3'];
        delete storage['member'];
    });
});
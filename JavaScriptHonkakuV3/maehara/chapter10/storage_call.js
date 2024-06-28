const storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge'));

const storage2 = new MyStorage('StorageTest');
storage2.setItem('hoge', 'ほげほげ');
console.log(storage2.getItem('hoge'));


storage.save();
storage2.save();
let storage = new MyStorage('StorageSample');
storage.setItem('hoge', 'ほげほげ');
console.log(storage.getItem('hoge'));
storage.save();
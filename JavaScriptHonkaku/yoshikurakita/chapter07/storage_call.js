const storage = new MyStorage('MyApp');
storage.setItem('hoge', 'HOGE');
console.log(storage.getItem('hoge'));
storage.save();
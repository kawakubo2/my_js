let storage = new MyStorage('JSSample');
let d = new Date();
storage.setItem('hoge', d.toLocaleString());
console.log(storage.getItem('hoge'));
storage.save();
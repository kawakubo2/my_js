import MyStorage from './MyStorage.js';

const storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
storage.setItem('piyo', 'ぴよ');
console.log(storage.getItem('hoge'));
console.log(storage.getItem('piyo'));

storage.save();
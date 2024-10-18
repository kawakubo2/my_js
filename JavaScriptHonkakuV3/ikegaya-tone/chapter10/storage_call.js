import MyStorage from "./MyStorage.js";

const storage = new MyStorage('JSSample2');
storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge'));
storage.save();

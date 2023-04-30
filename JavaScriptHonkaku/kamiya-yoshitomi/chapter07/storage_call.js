const storage1 = new MyStorage('JSSample');
storage1.setItem('hoge', 'ほげ');
console.log(storage1.getItem('hoge'));
const storage2 = new MyStorage('MyApp');
storage2.setItem('hoge', 'ふが');
console.log(`MyStorageのhoge: ${storage2.getItem('hoge')}`);
console.log(`JSSampleのhoge: ${storage1.getItem('hoge')}`);
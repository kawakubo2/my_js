const storage = new MyStorage2('JSSample');
storage.setItem('piyo', 'ぴよ');
console.log(storage.getItem('piyo'));
storage.save();
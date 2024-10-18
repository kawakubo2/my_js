const storage = localStorage;

storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'ぶとう';

console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);


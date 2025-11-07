const storage = localStorage;

storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'ぶどう';

// キーが存在する場合、値が上書きされる
storage.setItem('fruit3', '葡萄');

// console.log(storage.getItem('fruit1'));
// console.log(storage.fruit2);
// console.log(storage['fruit3']);
console.log(storage['fruit1']);
console.log(storage.getItem('fruit2'));
console.log(storage.fruit3);
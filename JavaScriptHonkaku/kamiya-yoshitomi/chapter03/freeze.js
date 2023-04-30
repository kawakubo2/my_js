const pet1 = { type: 'スノーホワイトハムスター', name: 'キラ'};
const pet2 = { type: 'ネコ', name: 'ミケ'};

Object.seal(pet1); // 追加・削除が出来ないようになる。変更は可。
Object.freeze(pet2); // 追加・削除・更新が出来なくなる。

pet1.name = 'ハム太郎';
console.log(pet1);
pet1.age = 3; // 追加しようとする無視される
console.log(pet1);
delete pet1.name;
console.log(pet1);
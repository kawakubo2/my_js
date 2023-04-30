'use strict';

let pet = { type: 'スノーホワイト', name: 'キラ'};

// Object.preventExtensions(pet);
// Object.seal(pet);
// freezeはuse strictを指定しない限りエラーにはならない
Object.freeze(pet);

pet.name = '山田キラ';　// 変更 freezeを指定するとエラーとなる

delete pet.type;　// 削除 sealを指定するとエラーとなる

pet.weight = 42; // 追加 sealまたはpreventExtensionsを指定するとエラーとなる
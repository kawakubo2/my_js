'use strict';

const pet = {
    type: 'スノーホワイトハムスター',
    name: 'キラ'
};

// Object.preventExtensions(pet); // プロパティの追加を禁止
// Object.seal(pet); // プロパティの追加・削除を禁止
// Object.freeze(pet); // プロパティの追加・削除・変更を禁止

pet.name = '山田きら';

delete pet.type;

pet.weight = 42;
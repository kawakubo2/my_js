"use strict";

let pet = { type: 'スノーホワイトハムスター', name: 'キラ'};

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet); // イミュータブルオブジェクト

pet.name = '山田キラ'; // 変更

delete pet.type; // 削除

pet.weight = 42; // 追加
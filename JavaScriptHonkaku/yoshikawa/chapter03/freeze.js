const pet = { type: 'スノーホワイトハムスター', name: 'キラ'};
// Object.freeze(pet);
// Object.seal(pet);
Object.preventExtensions(pet);

pet.name = '山田きら';
pet.color = '白';
delete pet['name'];

console.log(pet);

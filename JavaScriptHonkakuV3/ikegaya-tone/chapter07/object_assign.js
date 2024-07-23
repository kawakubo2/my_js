const pet1 = {
    type: 'スノーホワイトハムスター',
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    },
};
const pet2 = {
    name: '山田キラ',
    color: '白',
    description: {
        food: 'ひまわりのタネ'
    }
};
const pet3 = {
    weight: 42,
    photo: 'http://www.wings.msn.to',
};


const pet_all = Object.assign({}, pet1, pet2, pet3);
console.log(pet_all);
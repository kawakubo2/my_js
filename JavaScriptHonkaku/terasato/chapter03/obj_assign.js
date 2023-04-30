const pet = {
    type: 'スノーホワイトハムスター',
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    }
};

const pet2 = {
    name: '山田きら',
    color: '白',
    description: {
        food: 'ひまわりのタネ'
    }
};

const pet3 = {
    weigth: 42,
    photo: 'http://example.com'
}

const merged = Object.assign({}, pet, pet2, pet3);

console.log(merged);
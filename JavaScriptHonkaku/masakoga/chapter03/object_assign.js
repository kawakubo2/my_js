let pet = {
    type: 'スノーホワイトハムスター',
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    }
};

let pet2 = {
    name: '山田キラ',
    color: '白',
    description: {
        food: 'ひまわりの種'
    }
};

let pet3 = {
    weight: 42,
    photo: 'http://www.wings.msn.to/img.ham.jpg'
};

let merged = Object.assign({}, pet, pet2, pet3);
console.log(merged);
console.log(pet);
console.log(pet2);
console.log(pet3);
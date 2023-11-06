const pet = {
    type: 'スノーホワイトハムスター',
    name: 'キラ',
    description: {
        birth: '2014-02-15'
    },
};
const pet2 = {
    name: '山田きら',
    color: '白',
    description: {
        food: 'ひまわりの種'
    }
};
const pet3 = {
    weight: 42,
    photo: 'http://www.wings.msn.to/img/ham.jpg'
};

const merged1 = Object.assign({}, pet, pet2, pet3);
console.log(merged1);

// オブジェクトの展開演算子(spread operator)を使った例
const merged2 = { ...pet, ...pet2, ...pet3 };
console.log(merged2);
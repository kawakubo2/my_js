const pet1 = {
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
    foot: 'ヒマワリの種'
  }
};

const pet3 = {
  weight: 42,
  photo: 'https://www.wings.msn.to/img/ham.jpg',
};

console.log('--- Object.assingn ---');
const merged = Object.assign({}, pet1, pet2, pet3);
console.log(merged);

console.log('--- スプレッド構文 ---');
const merged2 = { ...pet1, ...pet2, ...pet3 };
console.log(merged2);
const data = {
    potato: 'ジャガイモ',
    carrot: 'ニンジン',
    cucumber: 'キュウリ',
    eggplant: 'ナス'
};

const vegetables = Object.entries(data);
console.log(typeof vegetables === 'object' && vegetables instanceof Map);
console.log(vegetables.constructor);
const v2 = new Map(Object.entries(data));
// console.log(v2.constructor);
// console.log(v2);

v2.forEach((val, key) => console.log(`${key}: ${val}`));
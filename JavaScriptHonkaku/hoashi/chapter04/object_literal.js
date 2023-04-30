const name = '山田太郎';
const age = 38;
const pref = '東京';

const person = {name, age, pref};
console.log(person);
const bloodtype = 'B';
const person2 = {...person, bloodtype};
console.log(person2);
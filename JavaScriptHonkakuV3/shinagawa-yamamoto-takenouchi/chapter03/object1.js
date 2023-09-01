let member = {
    name: '横山花子',
    age: 32
};

const birth_date = new Date('1991-07-12');
const blood_type = 'B';

let member2 = { ...member, birth_date, blood_type };
console.log(member2);
member2['weight'] = 55;
member2['height'] = 158;
console.log(member2);
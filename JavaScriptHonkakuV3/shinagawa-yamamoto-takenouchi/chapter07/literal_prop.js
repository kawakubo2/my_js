const name = '山田太郎';
const birth = new Date(1970, 5, 25);
const member = {name, birth};
console.log(member);

const member2 = { ...member, pref: '福岡県'};
console.log(member2);
const bloodtype = 'B';
const member3 = { ...member2, bloodtype};
console.log(member3);

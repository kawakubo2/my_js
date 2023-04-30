const name = '山田太郎';
const birth = new Date(1970, 5, 25);
const member = {name, birth};
console.log(member);

const member2 = {...member, weight: 70, height: 172};
// const member2 = {member, weight: 70, height: 172};
console.log(member2);
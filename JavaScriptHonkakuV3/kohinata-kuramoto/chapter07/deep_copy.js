const member1 = {
  name: '山田太郎',
  prop: {
    height: 168,
    weight: 70
  }
};

const member2 = Object.assign({}, member1);

member2.prop.height = 170;

console.log('=== シャロー・コピー ===');
console.log('--- member1 ---');
console.log(member1);
console.log('--- member2 ---');
console.log(member2);


console.log('=== ディープ・コピー ===');
const member3 = JSON.parse(JSON.stringify(member1));
member2.prop.weight = 80;
console.log('--- member1 ---');
console.log(member1);
console.log('--- member2 ---');
console.log(member2);
console.log('--- member3 ---');
console.log(member3);
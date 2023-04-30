let Member = function() {}

Member.prototype.sex = '男';

let mem1 = new Member();
let mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '女';
console.log(mem1.sex + '|' + mem2.sex);

delete mem1.sex;
delete mem2.sex;

console.log(mem1.sex + '|' + mem2.sex);

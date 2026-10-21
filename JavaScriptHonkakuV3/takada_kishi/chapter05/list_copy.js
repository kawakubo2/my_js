const list1 = [1, 2, 3, 4];
const list2 = Array.from(list1);
console.log(`list1 => ${list1.toString()}`);
console.log(`list2 => ${list2.toString()}`);
console.log(`list1とlist2のアドレスは${list1 === list2 ? '等しい': '異なる'}`);

list1[0] = 100;
console.log('list1[0] = 100');
console.log(`list1 => ${list1.toString()}`);
console.log(`list2 => ${list2.toString()}`);

const list3 = [1, 2, 3, 4];
const list4 = list3;
console.log(`list3 => ${list3.toString()}`);
console.log(`list4 => ${list4.toString()}`);
console.log(`list3とlist4のアドレスは${list3 === list4 ? '等しい': '異なる'}`);

list3[0] = 100;
console.log('list3[0] = 100');
console.log(`list3 => ${list3.toString()}`);
console.log(`list4 => ${list4.toString()}`);
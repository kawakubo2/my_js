const list1 = [1, 2, 3, [4, 5], 6];
console.log('Array.fromはシャローコピー');
const list2 = Array.from(list1);
console.log(list1);
console.log(list2);
list2[0] = 200;
list2[3][0] = 100;
console.log('list2[0] = 200;');
console.log('list2[3][0] = 100;');
console.log(list1);
console.log(list2);

/*
配列のシャローコピーの方法
const list2 = Array.from(list1);
const list4 = [...list3];
const list6 = list5.slice();
const list8 = list7.concat();
*/
const list1 = [1, 2, 3, 4];
const list3 = Array.from(list1);
const list2 = list1;
for (let i = 0; i < list2.length; i++) {
    list2[i] *= 2;
}
console.log(list1);
console.log(list2);
console.log(list3);
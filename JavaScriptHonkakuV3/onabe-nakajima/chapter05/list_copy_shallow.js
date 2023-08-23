const list1 = [1, 2, 3, 4, 5];
const list2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

const copy1 = Array.from(list1);
const copy2 = Array.from(list2);
const copy3 = [];
for (let i = 0; i < list2.length; i++) {
    copy3[i] = [];
    for (let j = 0; j < list2[i].length; j++) {
        copy3[i][j] = list2[i][j];
    }
}
const copy4 = [...list1];
const copy5 = [...list1, 6];
const copy6 = [0, ...list1];

list1[0] = 999;
list2[0][0] = 777;

console.log(list1);
console.log(copy1);
console.log(copy4);
console.log(copy5);
console.log(copy6);
console.log(list2);
console.log(copy2);
console.log(copy3);

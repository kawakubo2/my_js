const list1 = [1, 2, 3, 4, 5];
const list2 = [
    [ 10, 20, 30 ],
    [ 40, 50, 60 ],
    [ 70, 80, 90 ]
];

const copy1 = Array.from(list1);
const copy2 = Array.from(list2);

list1[0] = 999;
list2[0][0] = 777;

console.log("###list1");
console.log(list1)
console.log("###copy1");
console.log(copy1);

console.log("###list");
console.log(list2);
console.log("###copy2");
console.log(copy2);

const list3 = [];
for (let i = 0; i < list2.length; i++) {
    list3[i] = Array.from(list2[i]);
}
list2[0][1] = 333;
console.log('###list2');
console.log(list2);
console.log('###list3');
console.log(list3);

const numbers = [1, [2, 3, [4 ], [5, [6, 7], 8]], [9, 10]];
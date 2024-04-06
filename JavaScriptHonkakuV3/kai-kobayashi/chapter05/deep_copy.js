let list1 = [
    [ 10, 20, 30], // 10000
    [ 40, 50, 60], // 20000
    [ 70, 80, 90], // 30000
];

let list2 = Array.from(list1);

list2[0][0] = 777;

console.log(list1);

console.log('---< deep copy >---');
let list3 = [
    [ 10, 20, 30], // 10000
    [ 40, 50, 60], // 20000
    [ 70, 80, 90], // 30000
];

list4 = JSON.parse(JSON.stringify(list3))

list4[0][0] = 777;

console.log(list3);

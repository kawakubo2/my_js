const list = [40, 78, 18, 72, 98, 39, 51, 28];

// 最小値をindex=0の位置に移動させる
const last = list.length - 1;
for (let j = last; j > 0; j--) {
    if (list[j - 1] > list[j]) {
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}

console.log(list);
/*
[ 18, 40, 78, 28, 72, 98, 39, 51 ]
*/
// 最小値をindex=1の位置に移動させる
for (let j = last; j > 1; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

// 最小値をindex=2の位置に移動させる
for (let j = last; j > 2; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

// 最小値をindex=3の位置に移動させる
for (let j = last; j > 3; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

// 最小値をindex=4の位置に移動させる
for (let j = last; j > 4; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

// 最小値をindex=5の位置に移動させる
for (let j = last; j > 5; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

// 最小値をindex=6の位置に移動させる
for (let j = last; j > 6; j--) {
    if (list[j - 1] > list[j]) {
        temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
    }
}
console.log(list);

console.log('------------------------');
const list2 = [40, 78, 18, 72, 98, 39, 51, 28];
const last2 = list.length - 1;
for (let i = 0; i < list2.length - 1; i++) {
    for (let j = last2; j > i; j--) {
        if (list2[j - 1] > list2[j]) {
            let temp = list2[j];
            list2[j] = list2[j - 1];
            list2[j - 1] = temp;
        }
    }
}
console.log(list2);
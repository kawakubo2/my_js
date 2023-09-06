const list = [40, 78, 18, 72, 98, 39, 51, 28];
const last = list.length - 1;
for (let i = 0; i < list.length - 1; i++) {
    for (let j = last; j > i; j--) {
        if (list[j - 1] > list[j]) {
            let temp = list[j];
            list[j] = list[j - 1];
            list[j - 1] = temp;
        }
    }
}
console.log(list);
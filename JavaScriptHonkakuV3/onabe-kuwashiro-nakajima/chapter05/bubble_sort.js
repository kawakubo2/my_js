const list = [7, 2, 6, 10, 1, 3, 4, 9, 8, 5];

const last = list.length - 1;
for (let i = 0; i < last - 1; i++) {
    for (let j = last; j > i; j--) {
        if (list[j - 1] > list[j]) {
            let temp = list[j];
            list[j] = list[j - 1];
            list[j - 1] = temp;
        }
    }
}

console.log(list);
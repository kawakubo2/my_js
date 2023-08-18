const list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];

for (let i = 0; i < Math.floor(list.length / 2); i++) {
    let temp = list[i];
    list[i] = list[list.length - 1 - i];
    list[list.length - 1 - i] = temp;
}

console.log(list);


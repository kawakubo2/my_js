const list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];

list.sort(() => {
    return Math.random() - 0.5;
});

console.log(list.toString());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.sort(() => {
    return Math.random() - 0.5;
});

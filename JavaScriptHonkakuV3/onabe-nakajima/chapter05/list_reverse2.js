const list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
let last = list.length - 1;
/*
let temp = list[0];
list[0] = list[last];
list[last] = temp;

temp = list[1];
list[1] = list[last - 1];
list[last - 1] = temp;

temp = list[2];
list[2] = list[last - 2];
list[last - 2] = temp;
*/
for (let i = 0, len = list.length; i < len / 2; i++) {
    [list[i], list[last - 1]] = [list[last - i], list[i]];
}
console.log(list.toString());
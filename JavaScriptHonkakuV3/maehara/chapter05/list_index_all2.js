
const list = ['い', 'ろ', 'は', 'に', 'い', 'へ', 'と'];
const keywd = 'い';
let result = list.map((v, i) => v === keywd ? i: -1).filter(c => c !== -1);
console.log(result);
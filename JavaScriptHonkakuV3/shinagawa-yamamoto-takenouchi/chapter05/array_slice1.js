const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const list = [];
for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
}
let start = 0;
const step = 2;
let end = start + step;
while(true) {
    end = end > list.length ? list.length: end;
    console.log(list.slice(start, end));
    start += step;
    end = start + step;
    if (start >= list.length) break;
}
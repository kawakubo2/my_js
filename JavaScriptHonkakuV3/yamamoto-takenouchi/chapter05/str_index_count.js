let str = 'にわにはにわにわとりがいる';
let count = 0;
let keyword = 'にわ';
let pos = str.indexOf(keyword);
let i = 0;
while (pos !== -1) {
    count++;
    pos = str.indexOf(keyword, pos + keyword.length);
}
console.log(`${count}件がヒットしました。`);
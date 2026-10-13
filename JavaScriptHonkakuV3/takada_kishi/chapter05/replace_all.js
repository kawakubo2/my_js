let str = 'にわにはにわにわとりがいる';
console.log('--- replaceAll ---');
console.log(str.replaceAll('にわ', '二羽'));
console.log('--- split, join ---');
console.log(str.split('にわ').join('二羽'));

console.log('--- while文, includes, replace ---');
while (str.includes('にわ')) {
  str = str.replace('にわ', '二羽');
}
console.log(str);
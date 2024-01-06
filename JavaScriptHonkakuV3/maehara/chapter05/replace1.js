const str1 = 'にわにはにわにわとりがいる';
const keywd = 'にわ';
const str2 = str1.replaceAll(keywd, '');
console.log(`${(str1.length - str2.length)/ keywd.length}個あります`);


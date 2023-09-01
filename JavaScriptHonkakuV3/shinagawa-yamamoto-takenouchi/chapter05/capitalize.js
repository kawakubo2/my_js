let msg = 'hELLo';
console.log(msg.substring(0, 1).toUpperCase() + msg.substring(1).toLocaleLowerCase());

let keyword = 'abc';
let str1 = 'abc1234xyzabc333abc';
let ary = str1.split(keyword);
console.log(ary);
let result = ary.join(keyword.toUpperCase());
console.log(result);

let str2 = str1.replaceAll(keyword, keyword.toUpperCase());
console.log(str2);

const list = ['松', '竹', '梅'];
console.log(list.join());
console.log(list.join('／'));
console.log(list.join('\t'));
console.log(list.join(''));

const list2 = ['hoge', null, undefined, []];
console.log(list2.join());
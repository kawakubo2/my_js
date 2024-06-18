const list = ['松', '竹', '梅'];
const result = list.join();
console.log(result);
console.log(typeof result === 'string');
console.log(Array.isArray(result));

const result2 = list.join('---');
console.log(result2);

const result3 = list.join('');
console.log(result3);
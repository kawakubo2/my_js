import { getTriangleArea, Member, getAuthor } from './lib/util.js';

console.log(getTriangleArea(10, 2));

const m = new Member('佐藤理央', 25);
console.log(m.show());

console.log(getAuthor());
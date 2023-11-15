import { getTriangleArea, Member } from "../lib/util.js";

const base = 10;
const height = 5;
console.log(`底辺が${base}、高さが${height}の三角形の面積は${getTriangleArea(base, height)}`);

const m = new Member('山田太郎', 38);
m.show();
import CoordinateRectangle from "./coordinate_rectangle.js";

const cr = new CoordinateRectangle(8, 12, 30, 40);
console.log(`面積: ${cr.getArea()}`);
console.log(`対角線: ${cr.getDiagonal()}`);
console.log(`外周: ${cr.getPerimeter()}`);
console.log(`原点からの距離: ${cr.getDistance()}`);
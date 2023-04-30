const getTriangle1 = (base, height) => { return base * height / 2; };
const getTriangle2 = (base, height) => base * height / 2;

const getCircle1= (radius) => { return Math.pow(radius, 2) * Math.PI; };
console.log(getCircle1(5));
const getCircle2 = (radius) => Math.pow(radius, 2) * Math.PI;
console.log(getCircle2(5));
const getCircle3 = radius => Math.pow(radius, 2) * Math.PI;
console.log(getCircle3(5));
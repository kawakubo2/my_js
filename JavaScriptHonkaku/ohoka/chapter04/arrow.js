const getTriangle1 = (base, height) => {
    return base * height / 2;
};

console.log(getTriangle1(30, 18));

const getTriangle2 = (base, height) => base * height / 2;
console.log(getTriangle2(10, 7));

const getCircle1 = (radius) => {
    return Math.pow(radius, 2) * Math.PI;
}
const getCircle2 = (radius) => Math.pow(radius, 2) * Math.PI;

const getCircle3 = radius => Math.pow(radius, 2) * Math.PI;

console.log(getCircle1(10, 20));
console.log(getCircle2(10, 20));
console.log(getCircle3(10, 20));
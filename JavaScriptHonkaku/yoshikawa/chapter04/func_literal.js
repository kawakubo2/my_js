const getTriangleArea = function(base, height) {
    return base * height / 2;
};
const getTriangleArea2 = (base, height) => base * height / 2;

const getCircleArea = function (radius) {
    return Math.pow(radius, 2) * Math.PI;
};

const getCircleArea2 = radius => Math.pow(radius, 2) * Math.PI;

const getTrapezoidArea = function (upperbase, lowerbase, height) {
    return (upperbase + lowerbase) * height / 2;
};

const getTrapezoidArea2 = (upperbase, lowerbase, height) =>
    (upperbase + lowerbase) * height / 2;
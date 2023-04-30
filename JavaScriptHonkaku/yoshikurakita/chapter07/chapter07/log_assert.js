function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0);
    return radius ** 2 * Math.PI;
}

console.log(circle(5));
console.log(circle(-5));
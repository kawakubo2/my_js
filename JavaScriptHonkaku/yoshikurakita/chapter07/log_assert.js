function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0,
        '引数radiusは正数でなければいけません。');
    return radius ** 2 * Math.PI;
}

console.log(circle(-5));
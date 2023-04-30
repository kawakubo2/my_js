function calcAreaOfCircle(radius, pi = 3) {
    return radius ** 2 * pi;
}

console.log(calcAreaOfCircle(10, Math.PI));
console.log(calcAreaOfCircle(10));
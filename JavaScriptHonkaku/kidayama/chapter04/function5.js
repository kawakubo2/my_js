function max2(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    return n2;
}

console.log(max2(10, 20));
console.log(max2(-10, -20));

function max4(n1, n2, n3, n4) {
    return max2(max2(n1, n2), max2(n3, n4));
}
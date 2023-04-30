function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

console.log(getTriangle(10, 8)); // baseに10、heightに8
console.log(getTriangle(6)); // baseに6、heightにはデフォルト値の1
console.log(getTriangle()); // baseにはデフォルト値の1、heightにはデフォルト値の1
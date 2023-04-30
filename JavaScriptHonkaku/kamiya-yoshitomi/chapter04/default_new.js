function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

console.log(getTriangle(5, 3)); // base, heightとも指定。デフォルト値は適用されない
console.log(getTriangle(5)); // baseだけ指定。heightはデフォルト値の1が適用される。
console.log(getTriangle());  // base, heightとも省略。base, heightともデフォルト値が適用される。
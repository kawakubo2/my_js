class Area {
    static pi = 3.14;

    static circle(radius) {
        return radius ** 2 * this.pi;
    }
}

console.log(Area.pi);
console.log(Area.circle(10));

/*
JavaScriptの場合、インスタンスから静的プロパティ、
静的メソッドを呼び出すことはできない。
const a = new Area();
console.log(a.circle(10));
*/
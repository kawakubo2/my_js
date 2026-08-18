class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  area() {
    return this.base * this.height / 2;
  }
}

const t = new Triangle(8, 5);
console.log(t.area());
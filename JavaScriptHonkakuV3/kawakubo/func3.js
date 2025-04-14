function max2(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}

function max3(x, y, z) {
  let max = x;
  if (y > max) max = y;
  if (z > max) max = z;
  return max;
}

function max4(a, b, c, d) {
  return max2(max2(a, b), max2(c, d));
}

const a1 = [5, -4, 12, 3, 4, -2];
const a2 = [-5, -4, -12, -3, -4, -2];

function array_positive_max(numbers) {

}
function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new Error("引数が数値型ではない");
	}
	return x + y;
}

try {
  const a = 12.3;
  const b = 8.6;
  console.log(add(a, b));

  const c = 10.5;
  const d = '12';
  console.log(add(c, d));

  const e = -8.7;
  const f = 7.2;
  console.log(add(e, f));
} catch (e) {
  console.log(e);
}
function add(x, y) {
  if (!((typeof x === 'number') && (typeof y === 'number'))) {
    throw new Error(`引数が数値型以外です: x: ${x}, y: ${y}`);
  }
  return x + y;
}

try {
  console.log(add(10, 20));
} catch(e) {
  console.log(e.message);
} finally {
  console.log('------');
}

try {
  console.log(add(10, 'abc'));
  console.log('--- 決してターミナルには表示されない。');
} catch(e) {
  console.log(e.message);
} finally {
  console.log('------');
}

add('xyz', 'abc');
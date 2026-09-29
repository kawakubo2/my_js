const LIMIT = 1_000_000;

function generateNumbers(max) {
  const result = [];
  for (let i = 1; i <= max; i++) {
    result.push(i);
  }
  return result;
}

function* filterEvenNumbers(numbers) {
  for (const n of numbers) {
    if (n % 2 === 0) {
      yield n;
    }
  }
}

function* generateSquareRootNumbers(numbers) {
  for (const n of numbers) {
    yield Math.sqrt(n);
  }
}

const startMemory = process.memoryUsage().heapUsed;

generateSquareRootNumbers(filterEvenNumbers(generateNumbers(LIMIT)));

const endMemory = process.memoryUsage().heapUsed;

console.log(`ジェネレータ消費メモリ: ${(endMemory - startMemory) / 2 ** 20} MB`);


const LIMIT = 1_000_000;

function* generateNumbers(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
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

// const numbers = []
// for (const n of generateSquareRootNumbers(filterEvenNumbers(generateNumbers(LIMIT)))) {
//   numbers.push(n);
// }
// console.log(`結果の配列の要素数: ${numbers.length}`);
generateSquareRootNumbers(filterEvenNumbers(generateNumbers(LIMIT)));


const endMemory = process.memoryUsage().heapUsed;

console.log(`ジェネレータ消費メモリ: ${(endMemory - startMemory) / 2 ** 20} MB`);


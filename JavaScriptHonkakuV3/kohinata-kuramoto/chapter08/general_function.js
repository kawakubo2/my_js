const LIMIT = 1_000_000;

function generateNumbers(max) {
  const result = [];
  for (let i = 1; i <= max; i++) {
    result.push(i);
  }
  return result;
}

function filterEvenNumbers(array) {
  const result = [];
  for (const n of array) {
    if (n % 2 === 0) {
      result.push(n);
    }
  }
  return result;
}

function generateSuareRootNumbers(array) {
  const result = [];
  for (const n of array) {
    result.push(Math.sqrt(n));
  }
  return result;
}

const startMemory = process.memoryUsage().heapUsed;

const hugeArray = generateNumbers(LIMIT);
const evenArray = filterEvenNumbers(hugeArray);
const squareRootNumbers = generateSuareRootNumbers(evenArray);

const endMemory = process.memoryUsage().heapUsed;

console.log(`配列生成関数消費メモリ: ${(endMemory - startMemory) / 2 ** 20} MB`);


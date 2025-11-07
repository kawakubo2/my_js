const storage = localStorage;

storage.setItem('radius', 10);

const radius = Number.parseFloat(storage.getItem('radius'));
const radius2 = storage.getItem('radius');

console.log(`半径${radius}の円の面積は${radius ** 2 * Math.PI}`);
console.log(`半径${radius2}の円の面積は${radius2 ** 2 * Math.PI}`);

storage.removeItem('radius');
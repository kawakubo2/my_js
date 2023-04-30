const date1 = new Date(2023, 4, 20);
const date2 = new Date(2023, 5, 12);

const MILLI_PER_DAY = 24 * 60 * 60 * 1000;

console.log((date2.getTime() - date1.getTime()) / MILLI_PER_DAY);
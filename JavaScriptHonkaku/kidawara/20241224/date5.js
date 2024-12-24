const now = new Date();
const newYearsDay = new Date(2025, 0, 1);

const diff = (newYearsDay.getTime() - now.getTime()) /
    (1000 * 60 * 60 * 24);

console.log(`来年元旦まであと${diff.toFixed(0)}日`);
const a1 = Array.of(1, 2, 4, 8, 16);
console.log(a1);

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = nums1
                .filter(n => n % 2 === 0)
                .map(r => Math.pow(r, 2) * Math.PI)
                .reduce((total, area) => total + area, 0);

console.log(total);

const langs = ['JavaScript', 'Python', 'Java', 'C++'];
console.log(langs.reduce((result, s) => result + ":" + s), '');
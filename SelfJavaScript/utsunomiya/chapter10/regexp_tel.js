const target = '5341nb;090-1234-5678f29q0g070-9876-5432nfw';
const pattern = /(070|080|090)-(\d{4})-(\d{4})/g;

const mobileNums = target.matchAll(pattern);

for (const num of mobileNums) {
    console.log('--------------');
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
    console.log(num[3]);
}
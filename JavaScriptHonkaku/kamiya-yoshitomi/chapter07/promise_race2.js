const RANDOM_MAX = 10_000_000;
const ARRAY_SIZE = RANDOM_MAX;

const array_all = [];
const array0 = [];
const array1 = [];
const array2 = [];
const array3 = [];
const array4 = [];
const array5 = [];
const array6 = [];
const array7 = [];
const array8 = [];
const array9 = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    array_all.push(r);
    switch(i % 10) {
        case 0: array0.push(r); break;
        case 1: array1.push(r); break;
        case 2: array2.push(r); break;
        case 3: array3.push(r); break;
        case 4: array4.push(r); break;
        case 5: array5.push(r); break;
        case 6: array6.push(r); break;
        case 7: array7.push(r); break;
        case 8: array8.push(r); break;
        case 9: array9.push(r); break;
    }
}

const start = Date.now();
const target = Math.floor(Math.random() * RANDOM_MAX) + 1;
let answer1 = -1;
for (let i = 0; i < ARRAY_SIZE; i++) {
    if (array_all[i] === target) {
        answer1 = array_all[i];
        break;
    }
}
const end = Date.now();
console.log(`見つけた値: ${answer1}`);
console.log(`処理時間: ${end - start}`);

let answer2 = -1;
const asyncSearch = nums => {
    return new Promise(resolve => {
        setTimeout(() => {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === target) {
                    answer2 = nums[i];
                    resolve(answer2);
                    break;
                }
            }
        });
    });
};

const start_async = Date.now();
Promise.race([
    asyncSearch(array0),
    asyncSearch(array1),
    asyncSearch(array2),
    asyncSearch(array3),
    asyncSearch(array4),
    asyncSearch(array5),
    asyncSearch(array6),
    asyncSearch(array7),
    asyncSearch(array8),
    asyncSearch(array9)
])
.then(
    response => {
        console.log(`見つけた値: ${response}`);
        const end_async = Date.now();
        console.log(`asyncSearchを使った処理時間: ${end_async - start_async}`);
    }
)
.catch(
    error => {
        console.log(error);
    }
)
.finally(
    () => {
        console.log('asyncSearch終了');
    }
);



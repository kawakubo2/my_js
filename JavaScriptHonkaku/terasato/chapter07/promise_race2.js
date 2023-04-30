const RANDOM_MAX = 10_000_000;
const ARRAY_SIZE = RANDOM_MAX;

const array = [];
const array1 = [];
const array2 = [];
const array3 = [];
const array4 = [];
const array5 = [];
const array6 = [];
const array7 = [];
const array8 = [];
const array9 = [];
const array10 = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    switch (i % 10) {
        case 0: array1.push(r); break;
        case 1: array2.push(r); break;
        case 2: array3.push(r); break;
        case 3: array4.push(r); break;
        case 4: array5.push(r); break;
        case 5: array6.push(r); break;
        case 6: array7.push(r); break;
        case 7: array8.push(r); break;
        case 8: array9.push(r); break;
        case 9: array10.push(r); break;
    }
}

const start = Date.now();
const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
let search_flag = false;
for (let i = 0; i < ARRAY_SIZE; i++) {
    if (array[i] === r) {
        search_flag = true;
        break;
    }
}
const end = Date.now();
console.log(`処理時間: ${end - start}`);

const asyncSearch = (array, start, end, target) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let search_flag = false;
            for (let i = start; i < end; i++) {
                if (array[i] === target) {
                    search_flag = true;
                    break;
                }
            }
            if (search_flag) {
                resolve(true);
            }
        });
    });
};

const start_promise = Date.now();
Promise.race([
    asyncSearch(array1, 0, 1_000_000, r),
    asyncSearch(array2, 0, 1_000_000, r),
    asyncSearch(array3, 0, 1_000_000, r),
    asyncSearch(array4, 0, 1_000_000, r),
    asyncSearch(array5, 0, 1_000_000, r),
    asyncSearch(array6, 0, 1_000_000, r),
    asyncSearch(array7, 0, 1_000_000, r),
    asyncSearch(array8, 0, 1_000_000, r),
    asyncSearch(array9, 0, 1_000_000, r),
    asyncSearch(array10, 0, 1_000_000, r),
])
.then(
    response => {
    }
)
.finally(
    () => {
        console.log(`Promise.race()使用時の処理時間: ${Date.now() - start_promise}`);
    }
);


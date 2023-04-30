function nibai_val(n) {
    n *= 2;
}

let x = 10;
nibai_val(x);
console.log(x);

function nibai_ref(n) {
    for (let i = 0; i < n.length; i++) {
        n[i] *= 2;
    }
}

function nibai_ref_ng(n) {
    for (let m of n) {
        m *= 2;
    }
}

let numbers = [1, 2, 3, 4];
nibai_ref(numbers);
console.log(numbers);

let numbers2 = [1, 2, 3, 4];
nibai_ref_ng(numbers2);
console.log(numbers2);
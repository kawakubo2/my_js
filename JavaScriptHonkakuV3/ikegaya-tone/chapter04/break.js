let i = 1;
let result = 0;

for (i = 1; i <= 100; i++) {
    result += i; // result = result + i
    if (result > 1000) {
        break;
    }
}
console.log(`合計値が1000を超えるのは${i}`);
/*
result = result + i ---> result = 0 + 1 === result = 1
result = result + i ---> result = 1 + 2 === result = 3
result = result + i ---> result = 3 + 3 === result = 6
result = result + i ---> result = 6 + 4 === result = 10 


*/
/*
1からnの総和
*/

function mysum(n) {
    if (n == 1) return 1;
    return n + mysum(n - 1);
}

console.log(mysum(10));
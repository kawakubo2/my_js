const a = ['A', 'B', 'C', 'D', 'E'];
console.log('---(1)---');
for (let i = 0; i < a.length; i++) {
    console.log(a[a.length - 1 - i]);
}

console.log('---(2)---');
for (let i = 0; i < a.length; i++) {
    console.log(a.at(-1 - i));
}

console.log('---(3)---');
for (let i = -1; i >= -(a.length); i--) {
    console.log(a.at(i));
}

console.log('---(4)---');
a.reverse();
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

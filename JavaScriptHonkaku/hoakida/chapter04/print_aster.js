function asters(cnt) {
    let temp = '';
    for (let i = 0; i < cnt; i++) {
        temp += '*';
    }
    console.log(temp);
}

for (let i = 1; i <= 35; i++) {
    asters(i);
}
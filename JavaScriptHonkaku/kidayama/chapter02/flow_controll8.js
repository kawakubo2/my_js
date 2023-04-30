const DANSU = 30;
for (let i = 1; i <= DANSU; i++) {
    let s = '';
    for (let j = 0; j < DANSU - i; j++) {
        s += '-';
    }
    for (let j = 0; j < i * 2 - 1; j++) {
        s += '*';
    }
    for (let j = 0; j < DANSU - i; j++) {
        s += '-';
    }
    console.log(s);
}
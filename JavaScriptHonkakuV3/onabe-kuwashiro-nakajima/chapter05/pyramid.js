const DANSU = 50;
for (let i = 1; i <= DANSU; i++) {
    console.log('-'.repeat(DANSU - i) + '*'.repeat(i * 2 - 1) + '-'.repeat(DANSU - i));
}
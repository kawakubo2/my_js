const dates = ['2022/9/12', '2024-8-5', '2026.12.31'];
for (const date of dates) {
    console.log(date.split(/[\/\-/.]/).map(n => Number.parseInt(n)));
}
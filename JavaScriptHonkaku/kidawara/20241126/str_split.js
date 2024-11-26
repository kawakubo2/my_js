const dates = ['2024/11/26', '2024-11-26', '2024.11.26'];

for (const date of dates) {
    console.log(date.split(/[/\.-]/).map(elem => Number(elem)));
}
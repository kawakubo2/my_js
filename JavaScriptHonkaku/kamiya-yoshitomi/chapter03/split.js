const dates = [
    "2022/07/06", "2022-07-06", "2022.07.06"
];

const p = /[\/\-\.]/gi
for (const date of dates) {
    console.log(date.split(p).map(e => Number.parseInt(e)));
}
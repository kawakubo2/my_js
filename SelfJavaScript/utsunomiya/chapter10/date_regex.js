const dates = [
    "2022/03/07",
    "2022-03-07",
    "2022.03.07"
];

const pattern = /[\/\.\-]/;
for (const date of dates) {
    console.log(date.split(pattern));
}
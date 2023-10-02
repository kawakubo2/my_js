const dates = ['2023-10-02', '2023/10/02', '2023.10.02'];

const re = /[\/\.\-]/g;

for (const date of dates) {
    // console.log(date.split(re).map(str => Number.parseInt(str)));
    console.log(date.split(re).map(function(str) {
        return Number.parseInt(str);
    }));
}
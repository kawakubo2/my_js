const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let step = 5;
let start = 0;
let end = start + step;
while (true) {
    console.log(str.substring(start, end));
    if (end + step < str.length) {
        end += step;
    } else {
        end = str.length;
    }
    start += step
}
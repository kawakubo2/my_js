const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let start = 0;
let end = start + 5;
while (start < alphabet.length) {
    console.log(alphabet.substring(start, end));
    start += 5;
    end = start + 5;
    console.log(`start=${start}, end=${end}`);
}
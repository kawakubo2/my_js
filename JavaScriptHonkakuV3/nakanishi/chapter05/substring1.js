const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let start = 0; start < alphabet.length; start += 5) {
    let end = start + 5;
    if (end >= alphabet.length) {
        end = alphabet.length;
    }
    console.log(alphabet.substring(start, end));
}
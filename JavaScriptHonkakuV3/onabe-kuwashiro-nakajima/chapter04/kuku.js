outer:
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (i * j > 30) {
            break outer;
        }
        document.write((i * j) + " ");
    }
    document.write('<br>');
}
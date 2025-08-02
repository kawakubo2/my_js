let count = 0;
document.write('<table border="1">');
for (let i = 1; i <= 9; i++) {
    document.write('<tr>');
    for (let j = 1; j <= 9; j++) {
        count++;
        let result = i * j;
        if (result > 30) break;
        document.write(`<td>${result}</td>`);
    }
    document.write('</tr>');
}
document.write('</table>');

document.write(`回数: ${count}`);
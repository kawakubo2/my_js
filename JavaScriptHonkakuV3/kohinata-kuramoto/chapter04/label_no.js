document.write('<table border="1">');
let counter = 0;

outer:
for (let i = 1; i <= 9; i++) {
  document.write('<tr>');
  for (let j = 1; j <= 9; j++) {
    counter++;
    if (i * j > 30) break outer;
    document.write('<td>' + (i * j) + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');
document.write(`<p>${counter}回`);
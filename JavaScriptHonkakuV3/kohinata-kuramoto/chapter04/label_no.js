document.write('<table border="1">');
let counter = 0;
for (let i = 1; i <= 99; i++) {
  document.write('<tr>');
  for (let j = 1; j <= 99; j++) {
    counter++;
    if (i * j > 300) break;
    document.write('<td>' + (i * j) + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');
document.write(`<p>${counter}回`);
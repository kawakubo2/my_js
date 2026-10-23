const elems = document.querySelectorAll('input[type="text"]');

for (const elem of elems) {
  console.log(`${elem.disabled} / ${elem.getAttribute('disabled')}`);
}
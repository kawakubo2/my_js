function printOptionValues(id) {
  const list = document.getElementById(id).children;
  for (const opt of list) {
    console.log(opt.value);
  }
}

printOptionValues('food');
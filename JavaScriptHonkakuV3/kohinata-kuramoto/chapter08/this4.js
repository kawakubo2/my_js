document.addEventListener('DOMContentLoaded', function(e) {
  const fruits = document.querySelectorAll('.fruit');
  for (const f of fruits) {
    f.addEventListener('click', function() {
      if (this.checked) {
        console.log(`${this.value}がチェックされました。`);
      } else {
        console.log(`${this.value}のチェックが外されました。`);
      }
    })
  }
})

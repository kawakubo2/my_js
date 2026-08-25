document.addEventListener('DOMContentLoaded', function(e) {
  document.querySelector('#favorite').addEventListener('click', function(e) {
    if (e.target.checked) {
      console.log(`${e.target.value}がチェックされました。`);
    } else {
      console.log(`${e.target.value}のチェックが外されました。`);
    }
  })
})
document.addEventListener('DOMContentLoaded', () => {
  let pattern = document.querySelector('#pattern').value;
  let option  = document.querySelector('#option').value;
  let target  = document.querySelector('#target').value;
  let result  = document.querySelector('#result');
  let testBtn = document.querySelector('#test');

  function isEmpty(s) {
    return s === null || s.trim() === '';
  }
  testBtn.addEventListener('click', (e) => {
    result.textContent = '';
    if (isEmpty(pattern) || isEmpty(target)) return;
    const regexp = new RegExp(pattern, option);
    result.textContent = regexp.test(target) ? '〇': '×';
  });
});
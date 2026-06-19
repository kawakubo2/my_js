document.addEventListener('DOMContentLoaded', () => {
  let pattern = document.querySelector('#pattern');
  let option  = document.querySelector('#option');
  let target  = document.querySelector('#target');
  let result  = document.querySelector('#result');
  let testBtn = document.querySelector('#test');

  function isEmpty(s) {
    return s === null || s.trim() === '';
  }
  testBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    result.textContent = '';
    if (isEmpty(pattern.value) || isEmpty(target.value)) return;
    const regexp = new RegExp(pattern.value, option.value);
    result.textContent = regexp.test(target.value) ? '〇': '×';
  });
});
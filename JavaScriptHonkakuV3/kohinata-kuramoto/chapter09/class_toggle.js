const elem = document.querySelector('#elem');

function highlight() {
  elem.classList.toggle('highlight');
}
elem.addEventListener('mouseenter', highlight);
elem.addEventListener('mouseleave', highlight);
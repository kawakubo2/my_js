const language = document.querySelector('#language');
const all_language = document.querySelectorAll('div.course li');

language.addEventListener('change', () => {
  for (const l of all_language) {
    l.style.backgroundColor = 'white';
    l.style.color = 'black';
  }
  const lang = language.value;
  console.log(`lang: ${lang}`);
  const langs = document.querySelectorAll(`div.course li.${lang}`);

  for (const l of langs) {
    l.style.backgroundColor = 'navy';
    l.style.color = 'white';
  }
});


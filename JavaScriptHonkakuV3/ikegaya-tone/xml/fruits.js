document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#xml-file');
    const load_button = document.querySelector('#load');
    const props = document.querySelector('#props');
    const result = document.querySelector('#result');
    const prop_result = document.querySelector('#prop-result');

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const text = reader.result;
        result.textContent = text;
        const parser = new DOMParser();
        books = parser.parseFromString(text, 'application/xml');
        console.log(books);
        // console.log('-------------------------------');
        // const titles = books.querySelectorAll('title');
        // titles.forEach(title => console.log(title.textContent));
    });

    load_button.addEventListener('click', () => {
        reader.readAsText(file.files[0], 'UTF-8');
    });

    props.addEventListener('change', (e) => {
        prop_result.textContent = '';
        const prop = e.target.value;
        const items = books.querySelectorAll(prop);
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.textContent;
            prop_result.append(li);
        });
    });

});
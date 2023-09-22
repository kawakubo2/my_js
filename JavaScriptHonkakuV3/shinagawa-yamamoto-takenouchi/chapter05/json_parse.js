const json_str = '{"books": [ \
    {"isbn": "978-4-7981-9771-2", "title": "びっくりJavaScript"}, \
    {"isbn": "978-4-2222-8719-3", "title": "なんとなくJavaScript"}, \
    {"isbn": "978-4-3333-7789-4", "title": "恐ろしいJavaScript"}, \
    {"isbn": "978-4-9999-8888-5", "title": "楽しいJavaScript"} \
]}';

const json_obj = JSON.parse(json_str);
console.log(json_obj['books']);

const str = JSON.stringify(json_obj);
localStorage.setItem('items', str);
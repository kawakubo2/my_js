const prefs = { '40': '福岡県', '41': '佐賀県', 42: '長崎県', '43': '大分県', '44': '熊本'};

document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const select = document.createElement('select'); // <select></select>
    for (const code in prefs) {
        const name = prefs[code];
        const option = document.createElement('option'); // <option></option>
        option.value = code; // <option value="40"></option>
        option.textContent = name; // <option value="40">福岡県</option>
        select.append(option);
    }
    result.append(select);
});
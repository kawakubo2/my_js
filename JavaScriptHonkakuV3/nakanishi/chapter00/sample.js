const prefs = {
    "40": "福岡県",
    "41": "佐賀県",
    "42": "長崎県",
    "43": "大分県"
};

const pref = document.querySelector('#pref');

for (const code in prefs) {
    const option = document.createElement('option');
    option.textContent = prefs[code];
    pref.appendChild(option);
}
const prefs = {"40": "福岡県", "41": "佐賀県", "42": "長崎県", "43": "大分県"};

const form = document.querySelector('#fm2');

const label = document.createElement('label');
label.for = "prefecture";
label.textContent = "北部九州の県";
const select = document.createElement('select');
select.id = "prefecture";
select.name = "prefecture";
for (const code in prefs) {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = prefs[code];
    select.append(option);
}
form.append(label);
form.append(select);
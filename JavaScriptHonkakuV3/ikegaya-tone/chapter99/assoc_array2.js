const genders = {male: '男性', female: '女性', other: 'その他'}

const fm = document.querySelector('#fm');

[...Object.entries(genders)].map(([gender, genderName]) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'gender';
    input.value = gender;
    label.textContent = genderName;
    label.prepend(input);
    fm.appendChild(label);
})
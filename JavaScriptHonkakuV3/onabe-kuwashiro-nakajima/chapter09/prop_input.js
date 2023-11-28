document.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const bloodtype = document.querySelector('#bloodtype');
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(`名前: ${name.value}`);
        // console.log(`名前: ${name.getAttribute('value')}`);
        console.log(`血液型: ${bloodtype.value}`);
        // console.log(`血液型: ${bloodtype.getAttribute('value')}`);
        if (name.value === '') {
            console.log('名前は必須入力です');
        }
        const bloodtypes = ['A', 'B', 'O', 'AB'];
        if (bloodtype.value === '') {
            console.log('血液型は必須選択です。');
        } else if (bloodtypes.indexOf(bloodtype.value) === -1) {
            console.log('血液型はA, B, O, ABの中から選択してください。');
        }
    });
});
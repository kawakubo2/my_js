document.getElementById('btn').addEventListener('click', function(e) {
    let names = document.getElementsByName('name');
    console.log(`名前: ${names.item(0).value}`);
    let ages= document.getElementsByName('age');
    console.log(`年齢: ${ages.item(0).value}`);
    let emails = document.getElementsByName('email');
    console.log(`Email: ${emails.item(0).value}`);
    e.preventDefault();
});
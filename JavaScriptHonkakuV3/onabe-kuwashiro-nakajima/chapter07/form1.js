document.addEventListener('DOMContentLoaded', () => {
    const button        = document.getElementById('btn');
    const name_element  = document.getElementById('name');
    const email_element = document.getElementById('email');
    let name  = name_element.value; 
    let email = email_element.value;
    let form_data = {
        name, email
    };
    console.log(form_data);

    function handleChange(e) {
        form_data = {
            ...form_data,
            [e.target.name]: e.target.value
        };
        console.log(form_data);
    }
    name_element.addEventListener('change', (e) => handleChange(e));
    email_element.addEventListener('change', (e) => handleChange(e));
    button.addEventListener('click', () => {
        console.log(form_data);
    });
});
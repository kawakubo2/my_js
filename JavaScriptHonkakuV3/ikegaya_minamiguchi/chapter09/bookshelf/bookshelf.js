document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const error_summary = document.querySelector('#error-summary');
    const tbody = document.querySelector('#book-list');

    function isEmpty(value) {
        return value === null || value.trim() === '';
    }
    function validate() {
        const errors = [];
    }
    tbody.addEventListener('click', () => {

    });
});
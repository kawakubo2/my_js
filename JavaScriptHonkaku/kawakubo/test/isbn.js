document.addEventListener('DOMContentLoaded', function() {
    const isbn = document.getElementById('isbn');
    const isbn_result = document.getElementById('isbn_result');
    isbn.addEventListener('blur', function() {
        let total = 0;
        const isbnValue = isbn.value;
        for (let i = 0; i < isbnValue.length; i++) {
            if (i % 2 == 0) {
                total += Number.parseInt(isbnValue);
            } else {
                total += Number.parseInt(isbnValue) * 3;
            }
        }
        if (total % 10 !== 0)
            isbn_result.textContent = "×";
        else
            isbn_result.textContent = "";
    })
});
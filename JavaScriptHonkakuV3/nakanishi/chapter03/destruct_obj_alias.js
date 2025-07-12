let title = '2025年第1四半期販売レポート';
let publisher = 'ABCデータリサーチ研究所';

fetch('book.json')
    .then(resp => resp.json())
    .then(data => {
        let { title: subject, publisher: company } = data.books[0];

        console.log(subject);
        console.log(company);
        console.log(title);
        console.log(publisher);
    })



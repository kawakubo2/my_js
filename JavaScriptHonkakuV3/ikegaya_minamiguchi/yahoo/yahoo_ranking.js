document.addEventListener('DOMContentLoaded', () => {
    const ranking_body = document.querySelector('#ranking-body');
    const url = 'http://localhost:3000/yahoo/api-yahoo-ranking.php';

    function create_td_with_anchor(name, url) {
        const td = document.createElement('td');
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';
        anchor.textContent = name;
        td.appendChild(anchor);
        return td;
    }

    function create_td_with_image(img_url) {
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = img_url;
        td.appendChild(img);
        return td;
    }

    function create_td(value) {
        const td = document.createElement('td');
        td.textContent = value;
        return td;
    }

    function create_tr(data) {
        const tr = document.createElement('tr');

        const rank_td = create_td(data.rank);
        const image_td = create_td_with_image(data.image.small);
        const item_name_td = create_td(data.item_information.name);
        const price_td = create_td(data.item_information.regular_price);
        const seller_td = create_td_with_anchor(data.seller.name, data.seller.url);

        tr.appendChild(rank_td);
        tr.appendChild(image_td);
        tr.appendChild(item_name_td)
        tr.appendChild(price_td);
        tr.appendChild(seller_td);

        return tr;
    }

    function create_trs(tbody, data) {
        for (const d of data) {
            tbody.appendChild(create_tr(d));
        }
    }


    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const ranking_data = data.high_rating_trend_ranking.ranking_data;
            console.log(ranking_data);
            create_trs(ranking_body, ranking_data);
        });
});
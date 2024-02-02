// yahoo_category.js
// import fetch from "../node_modules/node-fetch";
fetch('https://shopping.yahooapis.jp/ShoppingWebService/V2/categoryRanking?appid=dj0zaiZpPVJlQ0IxVlRBbG41ViZzPWNvbnN1bWVyc2VjcmV0Jng9OTU-')
    .then((response) => {

        if (!response.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
